export function requireAuth(req, res, next) {
    console.log(req)
    try {
        if (!req.session?.user) {
            return res.status(401).send('Not Authenticated')
        }
        req.loggedinUser = req.session.user
        next()
    } catch (err) {
        console.error('Auth middleware error:', err)
        res.status(500).send('Authentication failed')
    }
}
