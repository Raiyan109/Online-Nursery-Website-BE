import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";


const createProductIntoDB = async (product: TProduct) => {
    const isProductExists = await ProductModel.findOne({ title: product.title })
    if (isProductExists) {
        throw new AppError(httpStatus.CONFLICT, 'This product is already exists!');
    }
    const result = await ProductModel.create(product)
    return result
}

const getAllProductsFromDB = async () => {
    const result = await ProductModel.find()
    return result;
};

const getAllCategoriesFromDB = async () => {
    const result = await ProductModel.find({}, { category: 1, image: 1, title: 1, _id: 1 })
    return result;
};

const getASingleProductFromDB = async (id: string) => {
    try {
        const singleProductInfo = await ProductModel.findById(id);
        console.log(singleProductInfo);

        if (!singleProductInfo) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Failed to get this product');
        }

        return singleProductInfo;
    } catch (err) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Failed to get this product');
    }
};

const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
    try {
        const updatedProductInfo = await ProductModel.findByIdAndUpdate(
            id,
            payload,
            {
                new: true,
                runValidators: true,
                //   session,
            },
        );
        console.log(updatedProductInfo);

        if (!updatedProductInfo) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Failed to update product');
        }

        return updatedProductInfo;
    } catch (err) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Failed to update product');
    }
};

const deleteProductFromDB = async (id: string) => {
    const result = await ProductModel.findByIdAndDelete(
        id,
        { isDeleted: true }
    );
    return result;
};


export const ProductServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getAllCategoriesFromDB,
    getASingleProductFromDB,
    updateProductIntoDB,
    deleteProductFromDB
}