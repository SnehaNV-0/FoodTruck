import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-light pt-4">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Logo and About */}
          <div className="col-md-4 mb-4">
            <h4 className="text-uppercase fw-bold">Food Truck</h4>
            <p>
              Delicious food delivered at your doorstep. Taste the best, live the best.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-light">Home</a></li>
              <li><a href="#" className="text-decoration-none text-light">Menu</a></li>
              <li><a href="#" className="text-decoration-none text-light">Contact Us</a></li>
              <li><a href="#" className="text-decoration-none text-light">About Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase">Contact Us</h5>
            <p>
              <i className="bi bi-telephone-fill"></i> 7789652490
            </p>
            <p>
              <i className="bi bi-envelope-fill"></i> support@foodtruck.com
            </p>
            <div>
              <a href="#" className="text-light me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary text-center py-2">
        <small>© 2025 Food Truck. All Rights Reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;

