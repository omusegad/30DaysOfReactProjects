export  enum FetchState{
    LOADING ="LOADING",
    SUCCESS ="SUCCESS",
    ERROR ="ERROR"
}

export interface Product {
    id:number,
    title:string,
    price:number,
    category:string,
    description:string,
    image:string,
    rating:Rating
}
interface Rating {
    rate:number,
    count:number
}

export interface countInterface{
    value:number
}

export interface Cart {
    cart: Product[],
    cartTotal: number,
    cartTotalQuantity: number,
}
