"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const product_model_1 = require("./product.model");
const createProductIntoDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const isFacilityExists = yield product_model_1.ProductModel.findOne({ title: product.title });
    if (isFacilityExists) {
        throw new AppError_1.default(http_status_1.default.CONFLICT, 'This product is already exists!');
    }
    const result = yield product_model_1.ProductModel.create(product);
    return result;
});
const getAllProductsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.find();
    return result;
});
const getASingleProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const singleProductInfo = yield product_model_1.ProductModel.findById(id, {
            new: true,
            runValidators: true,
            //   session,
        });
        if (!singleProductInfo) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to get this product');
        }
        return singleProductInfo;
    }
    catch (err) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to get this product');
    }
});
const updateProductIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedProductInfo = yield product_model_1.ProductModel.findByIdAndUpdate(id, payload, {
            new: true,
            runValidators: true,
            //   session,
        });
        if (!updateProductIntoDB) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to update product');
        }
        return updateProductIntoDB;
    }
    catch (err) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to update product');
    }
});
const deleteProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findByIdAndDelete(id, { isDeleted: true });
    return result;
});
exports.ProductServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getASingleProductFromDB,
    updateProductIntoDB,
    deleteProductFromDB
};
