import React from 'react'

export default function NavBar() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand text-danger border-0" href="#">
            <b>B-Shop</b>
          </a>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#">Contact us </a>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0 pull-end">
              <div className='cartbx'> 
                <span className="cart-count-x text-white">0</span>
                Cart 
              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}
