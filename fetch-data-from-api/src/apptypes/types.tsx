export  enum FetchState{
    LOADING ="LOADING",
    SUCCESS ="SUCCESS",
    ERROR ="ERROR",

}

export type Product = {
    id:number,
    title:string,
    price:number,
    category:string,
    description:string,
    image:string
}