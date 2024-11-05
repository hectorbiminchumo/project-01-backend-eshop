
const stripe = require("stripe")(process.env.STRIPE_KEY)

exports.createCheckoutSession = async (req, res) => {

    const { cart } = req.body
    
    const session = await stripe.checkout.sessions.create({
        line_items: cart,
        mode: 'payment',
        success_url: "http://localhost:3000/?success=true",
        cancel_url: "http://localhost:3000/?canceled=true"

    })

    res.json({
        session: session
    })



}