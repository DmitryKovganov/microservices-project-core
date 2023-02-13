export interface CreateOrderRequest {
  productId: number;
  quantity: number;
  userId: number;
}

export interface CreateOrderResponse {
  status: number;
  error: string[];
  id: number;
}

export const ORDER_SERVICE_NAME = 'OrderService';
