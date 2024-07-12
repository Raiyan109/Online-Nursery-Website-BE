import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderIntoDB = async (order: TOrder) => {
    const { name, phone, address } = order
    const result = await OrderModel.create({ name, phone, address })
    return result
}

export const OrderServices = {
    createOrderIntoDB
}