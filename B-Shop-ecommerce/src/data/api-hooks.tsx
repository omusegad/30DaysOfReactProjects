import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FetchState, Product } from "../apptypes/types";
import ErroLoader from "../components/ErroLoader";
import { addToCart } from "../redux/slices/cartSlice";

export function UseGetProducts() {
  const [fetchingState, setFetchingState] = useState<FetchState>(
    FetchState.LOADING
  );
  const [products, setProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setFetchingState(FetchState.LOADING);
        await fetch("https://fakestoreapi.com/products?limit=10")
          .then((res) => res.json())
          .then((data) => setProducts(data as Array<Product>));
        setFetchingState(FetchState.SUCCESS);
      } catch (error) {
        setFetchingState(FetchState.ERROR);
      }
    };
    fetchProduct();
  }, []);


  // Initiate Add to Cart Redux Store Action
  const dispatch = useDispatch();
  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  }

  console.log(products);
  return (
    <>
      {fetchingState === FetchState.LOADING && <ErroLoader />}
      {fetchingState === FetchState.ERROR && (
        <p>Snap, Sorry something went wrong!</p>
      )}

      {fetchingState === FetchState.SUCCESS && (
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-lg-4 mb-4" key={product.id}>
                <div className="card">
                  <div className="card-body">
                    <div className="prod-img">
                     <a href="#">
                       <img src={product.image} alt={product.title} />
                     </a>
                      <span className="price-bx">
                        <strong> Ksh {product.price}</strong>
                      </span>
                    </div>
                    <h6 className="mt-3 prod-title">
                       <a href="#">{product.title}</a> 
                    </h6>
                     <ul className="product-detail-bx">
                        <li><strong>Ratings: </strong> {product.rating.rate}</li>
                        <li><strong>In Stock: </strong> {product.rating.count}</li>
                     </ul>
                  </div>
                  <div className="span m-3 text-end">
                    <span>
                    </span>
                    <button  className="btn btn-danger" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
