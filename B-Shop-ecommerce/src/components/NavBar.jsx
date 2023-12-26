import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function NavBar() {

  const cartQunatity = useSelector(state => state.cart.cart.map(cartItems => cartItems.quantity).reduce((a, b) => a + b, 0))
  // console.log(cartQunatity)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/" className="navbar-brand text-danger border-0">
            <b>B-Shop</b>
          </Link>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
              <Link to="/">
                Home
              </Link>
              </li>
             
              <li className="nav-item">
                <Link to="/product" >
                  Product
                </Link>
              </li>
               <li className="nav-item">
                <Link to="/news" >
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" > 
                  Contact Us 
              </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" > 
                  Login 
                 </Link>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0 pull-end">
              <div className='cartbx'>
                 <Link to="/cart" > 
                    <span className="cart-count-x text-white">{ cartQunatity }</span>
                  Cart 
                 </Link> 
              </div>
            </div>
          </div>
          </div>
        </nav>
    </>
  )
}
