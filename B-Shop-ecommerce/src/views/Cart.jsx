import Layout from "../components/Layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeCartItem } from "../redux/slices/cartSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  // console.log(cartItems);

  return (
    <>
      <Layout>
        <div className="row">
          {cartItems.length > 0 && (
            <>
              <div className="col-12">
                {cartItems.map((item) => {
                  return (
                    <div className="card mb-3">
                      <div className="card-body">
                        <table
                          id="cart"
                          className="table table-hover table-condensed"
                        >
                          <thead>
                            <tr>
                              <th>Product</th>
                              <th>Price</th>
                              <th>Quantity</th>
                              <th className="text-center">Subtotal</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-th="Product">
                                <div className="row">
                                  <div className="col-sm-2 hidden-xs">
                                    <img
                                      src={item.image}
                                      alt={item.title}
                                      className="img-responsive"
                                    />
                                  </div>
                                  <div className="col-sm-10">
                                    <h4 className="pt-2">{item.title}</h4>
                                    <p className="pt-2">{item.description}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="pt-4">Ksh {item.price}</td>
                              <td className="pt-4">
                                <input
                                  type="number"
                                  className="form-control text-center text-black"
                                  value={item.quantity}
                                />
                              </td>
                              <td className="pt-4">1.99</td>
                              <td className="pt-4" data-th="">
                                <button
                                  className="btn btn-danger btn-sm"
                                  onClick={() => dispatch(removeCartItem())}
                                >
                                  x
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="col-12">
                <table className="table">
                  <tbody>
                    <tr className="mb-3">
                      <td className="text-start">
                        <Link to="/" className="btn btn-info">
                          Continue Shopping{" "}
                        </Link>
                      </td>
                      <td className="hidden-xs text-center">
                        <strong>Total $1.99</strong>
                      </td>
                      <td className="text-end">
                        <Link to="#" className="btn btn-success btn-block">
                          Checkout{" "}
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}
          <div class="alert alert-success alert-dismissible fade show pt-4">
           <div className="row">
            <div className="col-6">
            <h4 class="alert-heading">Your cart is empty!</h4>
            </div>
            <div className="col-6 text-end">
            <h4 class="alert-heading"><Link to="/" className="btn btn-danger"> Continue Shopping</Link></h4>
            </div>
           </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
