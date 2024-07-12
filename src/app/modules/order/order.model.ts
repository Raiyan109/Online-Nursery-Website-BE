import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";



const orderSchema = new Schema<TOrder>({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
})

export const OrderModel = model<TOrder>('Order', orderSchema)