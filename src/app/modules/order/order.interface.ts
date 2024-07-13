import { Types } from "mongoose";


export type TOrder = {
    // cart: Types.ObjectId;
    name: string;
    phone: string;
    address: string;
    isDeleted: boolean;
}

export type TCartItem = {
    image: string;
    title: string;
    price: number;
    rating: string;
    category: [string];
    availableInStock: number;
    description: string;
    cartQuantity: number;
    _id: string
}

export interface OrderDetails {
    items: TCartItem[];
    name: string;
    phone: string;
    address: string;
    // Add other fields if necessary
}