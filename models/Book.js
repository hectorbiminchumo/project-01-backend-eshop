//1. Importaciones
const mongoose = require("mongoose")

//2. Schema
const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priceID: {
        type: String,
        required: true
    },
    productID: {
        type: String,
        required: true
    }

})


//3. Modelo
const Book = mongoose.model("Book", bookSchema)

// 4. Exportacion
module.exports = Book