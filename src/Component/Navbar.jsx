import React from "react";
import logo from "../Images/ngo.png";
const Navbar = () => {
  return (
    <>
      <div className="body" style={{ background: "white" }}>
        {/* <div class="container" style={{width:'100%'}}>
          <div class="row">
            <div class="col-sm-1">
              <img className="logosize" src={logo} alt="NGO Logo" />
            </div>
            <div class="col-sm-6">
              <h1
                className="alignCentre my-4"
                style={{
                  fontFamily: "Lucida Bright",
                  color: "orange",
                  fontWeight: "bold",
                }}
              >
                NITYA FOUNDATION
              </h1>
            </div>
            <div
              class="col-sm-5"
              style={{ background: "grey", borderRadius: "10px" }}
            >
              <div className="row my-4">
                <div className="col-sm-7 my-3">
                  <i class="fas fa-envelope mx-2" style={{ color: "red" }}></i>
                  <span style={{ color: "white" }}>info@nitya.gmail.com</span>
                </div>
                <div className="col-sm-5 my-3">
                  <i class="fa fa-phone mx-2" style={{ color: "red" }}></i>
                  <span style={{ color: "white" }}>9090909090</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="container-fluid">
  <div className="row">
    <div className="col-1">
      <img className="logosize" src={logo} alt="NGO Logo" />
    </div>
    <div className="col-6">
      <h1 className="alignCentre my-4" style={{ fontFamily: "Lucida Bright", color: "orange", fontWeight: "bold" }}>
        NITYA FOUNDATION
      </h1>
    </div>
    <div className="col-5" style={{ background: "grey", borderBottomLeftRadius: "50px", }}>
      <div className="row my-4">
        <div className="col-7 my-3">
          <i className="fas fa-envelope mx-2" style={{ color: "orange" }}></i>
          <span style={{ color: "white" }}>info@nitya.gmail.com</span>
        </div>
        <div className="col-5 my-3">
          <i className="fa fa-phone mx-2" style={{ color: "orange" }}></i>
          <span style={{ color: "white" }}>9090909090</span>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </>
  );
};

export default Navbar;
