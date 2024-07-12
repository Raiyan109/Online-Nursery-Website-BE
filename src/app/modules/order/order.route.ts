import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

router.post(
    '/',
    OrderControllers.createOrder,
);

router.get('/', OrderControllers.getOrders)

router.post('/stripe', OrderControllers.stripeCheckout);

router.get('/config', OrderControllers.getConfig);
export const OrderRoutes = router;