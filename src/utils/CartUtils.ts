import type { ApiData } from "../types/ApiData";

export function calculateTotal(cart: ApiData[]): number {
  return parseFloat(cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2));
}