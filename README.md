Readme
---

## Rate Your Books
**Links**:

Github: https://github.com/lewasserman/a2-shortstack

(Where I worked on the code)

(This has a copy of one the code: https://github.com/lewasserman/a4-components)

Glitch: https://a4-lauren-wasserman.glitch.me

-I changed my a2 project so that it is using react intead of just html. I created a react component which has all of my html elements. (My a2 project did not give the user the ability to edit or remove data. I figured it was okay to keep it this way, since that was within the guidelines for a2. I did add these features to a3.)

-I made another React component for my enter book form, but when I tried to import the file for that component into the main react component I got this error:

Uncaught ReferenceError: require is not defined
    at <anonymous>:5:14
    at eZ (babel.min.js:13)
    at r (babel.min.js:13)
    at s (babel.min.js:13)
    at XMLHttpRequest.t.forEach.e.src.o.onreadystatechange (babel.min.js:13)
(anonymous) @ body.jsx:2
eZ @ babel.min.js:13
r @ babel.min.js:13
s @ babel.min.js:13
t.forEach.e.src.o.onreadystatechange @ babel.min.js:13
XMLHttpRequest.send (async)
(anonymous) @ babel.min.js:13
aZ @ babel.min.js:13
(anonymous) @ babel.min.js:13
hZ @ babel.min.js:13
fZ @ babel.min.js:13

-I believe that import is not handled by the web-browser and so I attempted to fix this by using webpack. 

-The version of the code that I am submitting which works is in the branch "react" in my a2 project and main in my a4 project. This branch does not use webpack and uses one React component. I believe that this fulfills the requirments of a4-components as it does re-implement the client side portion of my a2 using React.

-The version of the code with which I attempted to use webpack is in the branch "a4" in my a2 project.

-The new technology improved my development experience overall. I enjoyed, using React as I like the ability to create custom components. However, my issues with webpack did hinder me. I also think it was good experience to write the same code in different formats (html and React).