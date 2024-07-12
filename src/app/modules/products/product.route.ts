import express from 'express';
import { ProductControllers } from './product.controller';



const router = express.Router();

router.post(
    '/',
    ProductControllers.createProduct,
);

router.patch(
    '/:id',
    ProductControllers.updateProduct
);

router.delete('/:id', ProductControllers.deleteProduct);

router.get(
    '/categories',
    ProductControllers.getAllCategories,
);

router.get(
    '/:id',
    ProductControllers.getASingleProduct,
);

router.get(
    '/',
    ProductControllers.getAllProducts,
);





export const ProductRoutes = router;