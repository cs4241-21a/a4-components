
module.exports.checkLogin = (req, res, next) => {

    const gitauth = req.isAuthenticated();

    // Already logged in
    if (req.cookies.loginCookie) {
        res.redirect(`/user/${req.cookies.loginCookie.userId}`);
        return;
    } else if (gitauth) {
        res.redirect(`/user/${req.user._id}`);
        return;
    }

    next();
}

// Verify that a token is valid in the authentication header
module.exports.verifyToken = (token) => {
        // valid token
        if (token) {
            try {
                const user = jwt.verify(token, process.env.JWT_SECRET);

                return [user, token];
            } catch {
                return null;
            }
        }

        return null;
}


module.exports.checkAuth = (req, res, next) => {
    const { token } = req.body;
    const tokenStuff = verifyToken(token);

    // not logged in
    if (!tokenStuff) {
        res.json({ errors: { login: 'Not logged in' } });
        return;
    }

    next();
}
