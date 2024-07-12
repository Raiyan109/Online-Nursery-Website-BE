import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { OrderServices } from "./order.service";

const createOrder = catchAsync(async (req, res) => {
    const { name, phone, address } = req.body;

    const result = await OrderServices.createOrderIntoDB({
        name, phone, address
    });

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Order created successfully',
        data: result,
    });
});

export const OrderControllers = {
    createOrder
}