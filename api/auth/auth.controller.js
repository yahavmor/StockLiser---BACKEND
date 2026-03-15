import { authService } from "./auth.service.js"


export async function login(req, res) {
    try {
        const cred = req.body
        const user = await authService.login(cred)
        req.session.user={
            _id:user._id,
            username:user.username
        }
        res.send(user)
    } catch (err) {
        console.error(err)
        res.status(401).send({ msg: "Invalid cred..." })
    }
}

export async function signup(req, res) {
    try {
        const cred = req.body
        const user = await authService.signup(cred)
        req.session.user={
        _id:user._id,
        username:user.username
        }
        res.send(user)
    } catch (err) {
        console.error(err)
        res.status(500).send({ msg: "Server error" })
    }
}

export async function logout(req, res) {
    console.log('Logout called, session ID:', req.sessionID, 'user:', req.session.user)
    req.session.destroy(err => {
        if (err) {
            console.error("Failed to destroy session:", err)
            return res.status(500).send({ msg: "Logout failed" })
        }
        console.log('Session destroyed successfully')

        res.clearCookie('connect.sid', {
            path: '/', 
            httpOnly: true,
            sameSite: 'lax',
            secure: false
        })

        res.send({ msg: "Logged out" })
    })
}



export function getLoggedInUser(req, res) {
    if (!req.session.user) {
        return res.status(401).send({ msg: "Not logged in" })
    }
    res.send(req.session.user)
}
