const Book = require("./../models/Book")
const stripe = require('stripe')(process.env.STRIPE_KEY)

exports.create = async (req, res) => {

    const { 
        title,
        pages,
        image,
        priceID,
        price,
        description
    } = req.body
    
    // STRIPE
     const newProductStripe = await stripe.products.create({
        name: title,
        description: description,
        images: [image]
     })
     console.log(newProductStripe);

     // NEW PRICE
     const newProductStripeID = newProductStripe.id
     const newProductStripeName = newProductStripe.name
     const newProductStripeDescription = newProductStripe.description
     const priceStripe = await stripe.prices.create({
        unit_amount: price,
        currency: 'usd',
        product: newProductStripeID,
        nickname: newProductStripeDescription
     });


    // MONGODB

    // Create a book in db
    // try {
    //     const newBook = await Book.create({
    //         title: newProductStripeName,
    //         price,
    //         pages,
    //         image,
    //         description,
    //         priceID,
    //         productID
    //     })
    //   // Return a successful response in JSON format
    //     res.json({
    //         msg: "Libro creado con exito",
    //         data: newBook
    //     })

    // } catch (error) {
    //     res.status(500).json({
    //         msg: "Hubo un error creando el libro",
    //         error: error
    //     })
    // }
    
}
exports.readAll = async (req, res) => {
    try {
        const books = await Book.find({})

        res.json({
            msg: "Libros obtenidos con exito",
            data: books
        })

    } catch (error) {

        res.status(500).json({
            msg: "Hubo un error obteniendo los datos",
            error: error
        })
        
    }
}
exports.readOne = async (req, res) => {
    const { id } = req.params

    try {
        const book = await Book.findById(id)

        res.json({
            msg: "Libro obtenido con exito",
            data: book
        })

    } catch (error) {
        res.status(500).json({
            msg: "hubo un error obteniendo los datos.",
            error: error
        })
    }
}
exports.edit = async (req, res) => {
    
    const { id } = req.params
    const {
        title,
        price,
        pages,
        image,
        description
    } = req.body

    try {
        const updatedBook = await Book.findByIdAndUpdate(
            id,
            {
                title,
                price,
                pages,
                image,
                description
            },
            {new: true}
        )
        res.json({
            msg: "Libro actualizado con exito",
            data: updatedBook
        })
    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error con la actualizacion del libro",
            error: error
        })
    }

}
exports.delete = async (req, res) => {

	const { id } = req.params
    
	try {
        
        const deletedBook = await Book.findByIdAndDelete({_id: id})

		res.json({
			msg: "Libro borrado con exito",
			data: deletedBook
		})

	} catch (error) {
		res.status(500).json({
			msg: "Hubo un error borrando el libro",
			error: error
		})
	}

}