
const stripe = require("stripe")(process.env.STRIPE_KEY)

exports.createCheckoutSession = async (req, res) => {
    
    const session = await stripe.checkout.sessions.create({
        line_items: [],
        mode: 'payment',
        success_url: "http://localhost:3000/?success=true",
        cancel_url: "http://localhost:3000/?canceled=true"

    })

    res.send("hola")



}