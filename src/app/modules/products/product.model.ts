import { Schema, model } from "mongoose";
import { TProduct } from "./product.interface";



const productSchema = new Schema<TProduct>({
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
}, { timestamps: true })

export const ProductModel = model<TProduct>('Product', productSchema)