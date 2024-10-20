const Order = require("./../models/Order")

exports.create = async (req, res) => {
    
    const { 
        items, 
        customer
    } = req.body.order



    // Check if both items and customer details exist in the request
    if (!items || !customer) {
        return res.status(400).json({
            msg: "Invalid order data. Please provide both items and customer information."
        });
    }

    // Create a new order in the database
    try {
        const newOrder = await Order.create({
            items,
            customer 
        });

        // Return a successful response in JSON format
        res.json({
            msg: "Order created successfully",
            data: newOrder
        });

    } catch (error) {
        res.status(500).json({
            msg: "There was an error creating the order",
            error: error.message
        });
    }
    
}

exports.readAll = async (req, res) => {
    try {
        const orders = await Order.find({})

        res.json({
            msg: "Get orders successfully",
            data: orders
        })

    } catch (error) {

        res.status(500).json({
            msg: "There was an error creating the order",
            error: error
        })
        
    }
}

exports.delete = async (req, res) => {

	const { id } = req.params
    
	try {
        
        const deletedOrder = await Order.findByIdAndDelete({_id: id})

		res.json({
			msg: "Order deleted successfully",
			data: deletedOrder
		})

	} catch (error) {
		res.status(500).json({
			msg: "There was an error deleting the order",
			error: error
		})
	}

}