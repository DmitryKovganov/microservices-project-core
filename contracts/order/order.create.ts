export namespace OrderCreate {
  export interface Request {
    productId: number;
    quantity: number;
    userId: number;
  }
  
  export interface Response {
    status: number;
    error: string[];
    id: number;
  }
}
