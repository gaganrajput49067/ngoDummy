import React from "react";

const ReadMore = () => {
  return (
    <div class="container mt-4" style={{ background: "grey" }}>
      <div class="row">
        <div class="col-sm-6">
          <h1>We Make a Difference in their Life</h1>
          <p>
            <strong>NEWS AND UPDATES</strong>
          </p>
          <p>
            Our organization also works towards women's empowerment, health,
            environment, consumer awareness, and cancer patients. We request you
            to donate to the poor and support these types of causes, as each
            contribution counts towards making a significant impact.
          </p>
          <p>
            <a href="#" class="btn btn-warning">
              READ MORE
            </a>
          </p>
        </div>

        <div class="col-sm-6">
          <img
            src="https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            style={{ width: "500px", height: "500px" }}
            alt="Image"
            class="img-fluid"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
