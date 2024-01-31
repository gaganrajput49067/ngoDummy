import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light p-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Nitya Foundation</h5>
            <p>
              Established on 25th May 2012 under Societies Registration Act
              1860. A National level society with 80G & 12A, devoted to the
              nation's prosperity.
            </p>
          </div>
          <div className="col-md-2">
            <h5>Centers</h5>
            <ul>
              <li>Bihar</li>
              <li>Delhi</li>
              <li>Jharkhand</li>
              <li>Maharashtra</li>
              <li>Uttar Pradesh</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Get Involved</h5>
            <ul>
              <li>
                <a href="#">Volunteer</a>
              </li>
              <li>
                <a href="#">Join NGO</a>
              </li>
              <li>
                <a href="#">Corporate</a>
              </li>
              <li>
                <a href="#">Individual Member</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact</h5>
            <p>Email: info@nityango.org</p>
            <p>Phone: +919818885691</p>
            <p>
              Address: H-28, Om Complex, 1st Floor, Laxmi Nagar Delhi - 110092
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <h5>Follow us on</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#" target="_blank">
                  Facebook
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank">
                  Twitter
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank">
                  Instagram
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank">
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
