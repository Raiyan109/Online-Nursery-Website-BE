import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { OrderDetails, TOrder } from "./order.interface";
import { OrderModel } from "./order.model";
import { ProductModel } from "../products/product.model";


const createOrderIntoDB = async ({ items, ...orderDetails }: OrderDetails) => {

    const result = await OrderModel.create({ items, ...orderDetails })

    // Update stock levels
    for (let item of items) {
        await ProductModel.findByIdAndUpdate(item._id, {
            $inc: { availableInStock: -item.cartQuantity }
        });
    }
    return result
}

const getOrdersFromDB = async () => {
    const result = await OrderModel.find()
    return result
}

const updateOrderIntoDB = async (id: string, payload: Partial<TOrder>) => {
    try {
        const updatedOrderInfo = await OrderModel.findByIdAndUpdate(
            id,
            payload,
            {
                new: true,
                runValidators: true,
                //   session,
            },
        );
        console.log(updatedOrderInfo);

        if (!updatedOrderInfo) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Failed to update order');
        }

        return updatedOrderInfo;
    } catch (err) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Failed to update order');
    }
};

export const OrderServices = {
    createOrderIntoDB,
    getOrdersFromDB
}