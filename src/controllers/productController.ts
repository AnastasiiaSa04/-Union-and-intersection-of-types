export interface Product { name: string; price: number }

export interface CalculateDiscountFn {
  (product: Product, discount: number): number;
}

export const calculateDiscount: CalculateDiscountFn = (product, discount) =>
  product.price * (1 - discount);
