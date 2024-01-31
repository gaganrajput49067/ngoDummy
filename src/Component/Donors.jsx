import React from "react";

const Donors = () => {
  return (
    <div class="container mt-4">
      <div class="row">
        <div class="col-sm-12 text-center">
          <h1>Our Donors</h1>
        </div>

        <div class="col-sm-12 mt-3">
          <div id="donorCarousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  style={{ height: "400px" }}
                  src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  class="d-block w-100"
                  alt="Donor 1"
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  style={{ height: "400px" }}
                  src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  class="d-block w-100"
                  alt="Donor 2"
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  style={{ height: "400px" }}
                  src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  class="d-block w-100"
                  alt="Donor 3"
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  style={{ height: "400px" }}
                  src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  class="d-block w-100"
                  alt="Donor 4"
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  style={{ height: "400px" }}
                  src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  class="d-block w-100"
                  alt="Donor 5"
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  style={{ height: "400px" }}
                  src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  class="d-block w-100"
                  alt="Donor 6"
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  style={{ height: "400px" }}
                  src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  class="d-block w-100"
                  alt="Donor 7"
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  style={{ height: "400px" }}
                  src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  class="d-block w-100"
                  alt="Donor 8"
                ></img>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#donorCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#donorCarousel"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donors;
