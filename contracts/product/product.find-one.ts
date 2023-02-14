export namespace ProductFindOne {
  export const topic = 'product.find-one.query';

  export interface FindOneData {
    id: number;
    name: string;
    sku: string;
    stock: number;
    price: number;
  }
  
  export interface Request {
    id: number;
  }
  
  export interface Response {
    status: number;
    error: string[];
    data: FindOneData | undefined;
  }
}
