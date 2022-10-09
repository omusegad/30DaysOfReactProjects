import { useState, useEffect } from "react";
import { FetchState, Product } from '../apptypes/types';

export function UseGetProducts(){
    const[fetchingState, setFetchingState] = useState<FetchState>(FetchState.LOADING);
    const[products, setProducts] = useState<Array<Product>>([]);

    useEffect(()=>{
       const fetchProduct = async () =>{
            try {
                setFetchingState(FetchState.LOADING);
                await fetch('https://fakestoreapi.com/products?limit=10')
                .then(res=>res.json())
                .then(data => setProducts(data as Array<Product>))
                setFetchingState(FetchState.SUCCESS);
                
            } catch (error) {
                setFetchingState(FetchState.ERROR)
            }
       }
       fetchProduct();
    },[])

    console.log(fetchingState)
    return(

        <>
        {fetchingState === FetchState.LOADING && ( 
            <div className="spin-bx">
                <div className="spinner-grow text-primary ml-2" role="status">
                   <span className="sr-only"></span>
                </div>
                <div className="spinner-grow text-secondary ml-2" role="status">
                   <span className="sr-only"></span>
                </div>
                <div className="spinner-grow text-success ml-2" role="status">
                     <span className="sr-only"></span>
                </div>
                <div className="spinner-grow text-danger ml-2" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        )}
        {fetchingState === FetchState.ERROR && ( <p>Snap, sorry something went wrong!</p>)}

        {fetchingState === FetchState.SUCCESS && (
            <div className="row">
            {products.map(product => {
                return(
                  <div className="col-lg-4 mb-4" key={product.id}>
                      <div className="card" >
                       <div className="card-body">
                       <div className="prod-img">
                            <img src={product.image} alt={product.title} />
                            <span className="price-bx"> <strong> $ {product.price}</strong> </span>
                        </div>
                        <h6 className="mt-3">{product.title}</h6>
                        <p>{product.description}</p>
                       </div>
                    </div>
                  </div>
                )
            })}
         </div>
        )}
       
        </>
    )

}