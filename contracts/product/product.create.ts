export namespace ProductCreate {
  export interface Request {
    name: string;
    sku: string;
    stock: number;
    price: number;
  }
  
  export interface Response {
    status: number;
    error: string[];
    id: number;
  }
}
