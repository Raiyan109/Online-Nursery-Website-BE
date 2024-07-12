"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    category: {
        type: [String],
        required: true
    },
    availableInStock: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    }
}, { timestamps: true });
exports.ProductModel = (0, mongoose_1.model)('Product', productSchema);
