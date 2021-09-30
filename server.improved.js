const express = require("express"),
  bodyParser = require("body-parser"),
  cookie = require("cookie-session"),
  cookieParser = require("cookie-parser"),
  serveStatic = require("serve-static"),
  GitHubStrategy = require("passport-github2").Strategy,
  passport = require("passport"),
  cors = require("cors"),
  app = express();

require("dotenv").config();

app.use(cors());

const e = require("express");
const { request } = require("express");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cookie({
    name: "session",
    keys: [process.env.KEY1, process.env.KEY2],
  })
);

app.use("/login", bodyParser.json(), (req, res) => {
  if (
    loginCollection !== null &&
    req.body.password != null &&
    req.body.username != null
  ) {
    loginCollection
      .find({ username: req.body.username })
      .toArray()
      .then((result) => {
        console.log(req.body.password);
        console.log(req.body.username);
        console.log(result);
        console.log(req.body.password === result[0].password);
        if (result.length === 1) {
          if (req.body.password === result[0].password) {
            req.session.login = true;
            req.session.username = req.body.username;

            console.log("Cookies: ", cookieParser.JSONCookies(req.cookies));

            console.log(req.session.login);
            console.log("Signed Cookies: ", req.signedCookies);
            res.json({ worked: true });
            //res.redirect( 'main.html' )
          } else {
            req.session.login = false;
            res.json({ worked: false });
            //res.sendFile( __dirname + '/public/index.html' )
          }
        } else {
          console.log("Wrong username");
          req.session.login = false;
          res.json({ worked: false });
          //res.sendFile( __dirname + '/public/index.html' )
        }
      });
  } else {
    res.json({ worked: false });
  }
});

app.use(serveStatic("public", { index: ["index.html"] }));

let loginCollection = null;
const uri =
  "mongodb+srv://" +
  process.env.DB_USER +
  ":" +
  process.env.DB_PW +
  "@csweb.0knbq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  loginCollection = client.db("contactApp").collection("loginInfo");
});

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      callbackURL: "https://react-contact-log.herokuapp.com/github/logs",
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/auth/error", (req, res) => res.send("Unknown Error"));
app.get(
  "/github/logs",
  passport.authenticate("github", { failureRedirect: "/auth/error" }),
  function (req, res) {
    res.redirect("/route?id=" + req.user.id);
  }
);

app.get("/route", (req, res) => {
  if (loginCollection != null) {
    loginCollection
      .insertOne({ username: req.query.id })
      .catch((err) => console.log(err))
      .then((response) => {
        req.session.login = true;
        req.session.username = req.query.id;
        response.json({ worked: true });
      });
  }
});

app.post("/createAccount", bodyParser.json(), function (request, response) {
  if (loginCollection !== null) {
    loginCollection
      .find({ username: request.body.username })
      .toArray()
      .then((result) => {
        if (result.length == 0) {
          loginCollection
            .insertOne(request.body)
            .then((result) => {
              response.json({ worked: true });
            })
            .catch((err) => console.log(err));
        } else {
          console.log("account exists");
          response.json({ worked: false });
        }
      });
  }
});

app.post("/signOut", bodyParser.json(), function (request, response) {
  if (loginCollection !== null) {
    console.log("In sign out: " + request.session.login);
    request.session.login = false;
    console.log("In sign out: " + request.session.login);
    response.json({ worked: true });
  } else {
    response.json({ worked: true });
  }
});

app.use(function (req, res, next) {
  if (req.session.login === true) next();
  else res.sendFile(__dirname + "/public/index.html");
});

let collection = null;

client.connect((err) => {
  collection = client.db("contactApp").collection("userData");
});

app.post("/submit", bodyParser.json(), function (request, response) {
  console.log("In submit");
  request.body.username = request.session.username;
  collection
    .insertOne(request.body)
    .then((insertResponse) => collection.findOne(insertResponse.insertedId))
    .then((findResponse) => response.json(findResponse))
    .catch((err) => console.log(err));
});

app.get("/getData", function (request, response) {
  if (collection !== null) {
    collection
      .find({ username: request.session.username })
      .toArray()
      .then((result) => {
        response.json(result);
      });
  }
});

app.post("/getItem", bodyParser.json(), function (request, response) {
  if (collection !== null) {
    collection
      .findOne({ _id: mongodb.ObjectId(request.body.id) })
      .then((result) => {
        response.json(result);
      });
  }
});

app.post("/delete", bodyParser.json(), function (request, response) {
  collection
    .deleteOne({ _id: mongodb.ObjectId(request.body.id) })
    .then((result) => response.json(result));
});

app.post("/update", bodyParser.json(), function (request, response) {
  console.log("in update " + request.body._id);
  collection
    .updateOne(
      { _id: mongodb.ObjectId(request.body._id) },
      {
        $set: {
          name: request.body.name,
          email: request.body.email,
          number: request.body.number,
          age: request.body.age,
          occupation: request.body.occupation,
          age_group: request.body.age_group,
          education_level: request.body.education_level,
          notes: request.body.notes,
        },
      }
    )
    .then((result) => response.json(result));
});

const listener = app.listen(process.env.PORT || 5000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
