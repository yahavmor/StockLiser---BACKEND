import { stockService } from "./stock.service.js"






export async function saveStock(req, res) {
    try {
        const stock = req.body
        const userId = req.session.user._id

        const saved = await stockService.saveStock(userId, stock)
        res.send(saved)

    } catch (err) {
        console.error(err)
        res.status(500).send({ msg: "Failed to save stock" })
    }
}

export async function getStocks(req, res) {
    try {
        const userId = req.session.user._id
        const stocks = await memeService.getStocks(userId)
        res.send(stocks)

    } catch (err) {
        console.error(err)
        res.status(500).send({ msg: "Failed to load stocks" })
    }
}
export async function removeStock(req, res) {
    let deletedStock
    try{
        const symbol = req.params.symbol
        const userId = req.session.user._id
        deletedStock = stockService.removeStock(userId,symbol)
    }
    catch (err){
        console.log(err)
        res.status(500).send({msg: "Failed to delete stock"})
    }
    res.send(deletedStock)
}
