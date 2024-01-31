import React from "react";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              style={{ height: "500px" }}
              src="https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="First slide"
            ></img>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              style={{ height: "500px" }}
              src="https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Second slide"
            ></img>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              style={{ height: "500px" }}
              src="https://images.pexels.com/photos/531910/pexels-photo-531910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Third slide"
            ></img>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default Carousel;
