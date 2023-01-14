const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true },
    products: [
      {
        productId: {
          type: String,
          required: true,
          unique: true,
        },
        quantity: {
          type: String,
          default: 1,
        },
      },
    ],
    amount: {type: Number, required: true},
    address: {type: Object, required: true},
    phone: {type: Number, required: true},
    status: {type: String, default: "pending"},
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", OrderSchema);
