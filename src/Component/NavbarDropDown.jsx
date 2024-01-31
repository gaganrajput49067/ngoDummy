import React from "react";

const NavbarDropDown = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand mr-4" href="#">
          Home
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle mr-4"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About Us
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle mr-4"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Project
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle mr-4"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Media
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle mr-4"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Get Involved
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle mr-4"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Download
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle mr-4"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Centre
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </div>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <button class="btn btn-outline-success my-2 mr-5">Donate</button>
        </div>
      </nav>
    </>
  );
};

export default NavbarDropDown;
