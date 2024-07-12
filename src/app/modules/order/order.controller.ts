import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { OrderServices } from "./order.service";
import config from "../../config";
const stripe = require('stripe')(config.stripe_secret_key);

const createOrder = catchAsync(async (req, res) => {
    const { name, phone, address, isDeleted } = req.body;

    const result = await OrderServices.createOrderIntoDB({
        name, phone, address, isDeleted
    });

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Order created successfully',
        data: result,
    });
});

const getOrders = catchAsync(async (req, res) => {

    const result = await OrderServices.getOrdersFromDB();

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Order retrieved successfully',
        data: result,
    });
});

const stripeCheckout = catchAsync(async (req, res) => {
    const { amount } = req.body;
    console.log(amount);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount | 0,
        currency: 'usd',
        automatic_payment_methods: {
            enabled: true,
        },
    })
    console.log(paymentIntent);
    return res.status(201).json({
        data: paymentIntent.client_secret
    })
});

// Pass Stripe publishable key from server to frontend
const getConfig = catchAsync(async (req, res) => {
    res.status(200).json({ publishableKey: config.stripe_publishable_key });
});



export const OrderControllers = {
    createOrder,
    getOrders,
    stripeCheckout,
    getConfig
}