import React from "react";

export default function Footer() {
  return (
    <div className="footer-bx">
      <div className="container mt-3 pt-5 pb-5">
        <footer className="footer-bs">
          <div className="row">
            <div className="col-md-3 footer-brand animated fadeInLeft">
              <h4 className="text-danger">B-Shop</h4>
              <p>
                Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam
                porttitor vitae orci nec ultricies. Curabitur vehicula, libero
                eget faucibus faucibus, purus erat eleifend enim, porta
                pellentesque ex mi ut sem.
              </p>
              <p>© 2023 B-Shop, All rights reserved</p>
            </div>
            <div className="col-md-4 footer-nav animated fadeInUp">
              <h4>Menu —</h4>
              <div className="col-md-6">
                <ul className="pages">
                  <li>
                    <a href="#">Travel</a>
                  </li>
                  <li>
                    <a href="#">Nature</a>
                  </li>
                  <li>
                    <a href="#">Explores</a>
                  </li>
                  <li>
                    <a href="#">Science</a>
                  </li>
                  <li>
                    <a href="#">Advice</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list ml-3">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contacts</a>
                  </li>
                  <li>
                    <a href="#">Terms & Condition</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 footer-social animated fadeInDown">
              <h4>Follow Us</h4>
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 footer-ns animated fadeInRight">
              <h4>Newsletter</h4>
              <p>
                A rover wearing a fuzzy suit doesn’t alarm the real penguins
              </p>
              <p>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for..."
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                      <span className="glyphicon glyphicon-envelope"></span>
                    </button>
                  </span>
                </div>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
