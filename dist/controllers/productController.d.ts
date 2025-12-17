export interface Product {
    name: string;
    price: number;
}
export interface CalculateDiscountFn {
    (product: Product, discount: number): number;
}
export declare const calculateDiscount: CalculateDiscountFn;
//# sourceMappingURL=productController.d.ts.map