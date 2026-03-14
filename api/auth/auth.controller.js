import { authService } from "./auth.service.js"

export async function login(req, res) {
    try {
        const cred = req.body
        const user = await authService.login(cred)
        res.send(user)
    } catch (err) {
        console.error(err)
        res.status(500).send({ msg: "Server error" })
    }
}

export async function signup(req, res) {
    try {
        const cred = req.body
        const user = await authService.signup(cred)
        res.send(user)
    } catch (err) {
        console.error(err)
        res.status(500).send({ msg: "Server error" })
    }
}

export async function logout(req, res) {
    try {
        req.session.destroy()
        res.send({ msg: "Logged out" })
    } catch (err) {
        console.error(err)
        res.status(500).send({ msg: "Server error" })
    }
}

