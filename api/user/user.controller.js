import { userService } from "./user.service.js"

export async function getUser(req, res) {
    try {
        const id = req.params.id
        const user = await userService.getUser(id)
        res.send(user)
    } catch (err) {
        console.error(err)
        res.status(500).send({ msg: "Server error" })
    }
}
export async function getUsers(req, res) {
    try {
        const users = await userService.getUsers()
        res.send(users)
    } catch (err) {
        console.error(err)
        res.status(500).send({ msg: "Server error" })
    }
}
export async function deleteUser(req, res) {
    try {
        const id = req.params.id
        const deletedUser = await userService.deleteUser(id)
        res.send(deletedUser)
    } catch (err) {
        console.error(err)
        res.status(500).send({ msg: "Server error" })
    }
}

export async function updateUser(req, res) {
    try {
        const id = req.params.id
        const updatedUser = await userService.updateUser(id,req.body)
        res.send(updatedUser)
    } catch (err) {
        console.error(err)
        res.status(500).send({ msg: "Server error" })
    }
}
export async function addUser(req, res) {
    try {
        const newUser = await userService.addUser(req.body)
        res.send(newUser)
    } catch (err) {
        console.error(err)
        res.status(500).send({ msg: "Server error" })
    }
}

