//1. Import
const mongoose = require("mongoose")

//2. Schema

// Create schema for each order item
const OrderItemSchema = mongoose.Schema({
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Book'
    },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    pages: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 }
  });
  
  // Create schema for customer details
  const CustomerSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    street: { type: String, required: true },
    postalCode: { type: String, required: true },
    city: { type: String, required: true }
  });
  
  // Create the main schema for the order
  const OrderSchema = mongoose.Schema(
    {
      items: [OrderItemSchema], // Array of order items
      customer: CustomerSchema, // Embedded customer document
      createdAt: { type: Date, default: Date.now }
    },
    { timestamps: true }  // Add createdAt and updatedAt fields automatically
  );


//3. Model
const Order = mongoose.model("Order", OrderSchema)

// 4. Export
module.exports = Order