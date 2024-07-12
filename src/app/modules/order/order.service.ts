import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";


const createOrderIntoDB = async (order: TOrder) => {
    const { name, phone, address, isDeleted } = order
    const result = await OrderModel.create({ name, phone, address, isDeleted })
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