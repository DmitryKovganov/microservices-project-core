export namespace ProductDecreaseStock {
  export const topic = 'product.decrease-stock.command';

  export interface Request {
    id: number;
    orderId: number;
  }
  
  export interface Response {
    status: number;
    error: string[];
  }
}
