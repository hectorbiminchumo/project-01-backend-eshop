// 1. Importaciones
const express = require("express")
const router = express.Router()

const orderController = require("./../controllers/orderController")

// 2. Ruteo
router.post("/create", orderController.create)
router.get("/readAll", orderController.readAll)
router.delete("/delete/:id", orderController.delete)


// 3. Exportaciones
module.exports = router