module.exports = (req, res, next) => {
    if (req.user && req.user.emails && req.user.emails[0]) {
      next()
    } else {
      res.writeHeader( 403, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ 'error': 'User not authenticatd' , 'status': 403}))
    }
}
