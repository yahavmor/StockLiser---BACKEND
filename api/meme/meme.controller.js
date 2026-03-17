import { memeService } from "./meme.service.js"






export async function saveMeme(req, res) {
    try {
        const meme = req.body
        const userId = req.session.user._id
        console.log(meme,userId)

        const saved = await memeService.saveMeme(userId, meme)
        res.send(saved)

    } catch (err) {
        console.error(err)
        res.status(500).send({ msg: "Failed to save meme" })
    }
}

export async function getMemes(req, res) {
    try {
        const userId = req.session.user._id
        const memes = await memeService.getMemes(userId)
        res.send(memes)

    } catch (err) {
        console.error(err)
        res.status(500).send({ msg: "Failed to load memes" })
    }
}
export async function removeMeme(req, res) {
    let deletedMeme
    try{
        const memeId = req.params.id
        const userId = req.session.user._id
        deletedMeme = memeService.removeMeme(userId,memeId)
    }
    catch (err){
        console.log(err)
        res.status(500).send({msg: "Failed to delete meme"})
    }
    res.send(deletedMeme)
}
