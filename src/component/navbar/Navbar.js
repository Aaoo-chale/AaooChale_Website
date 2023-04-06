import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = ({ bg }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light "
      style={{ backgroundColor: bg }}
    >
      <div className="container">
        <NavLink to="/">
          <img
            src="Aaoochale.png"
            style={{ height: "80px", width: "250px", padding: "10px 10px" }}
          />
        </NavLink>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ marginRight: "5%" }}
        >
          <ul className="navbar-nav ms-auto mb-1 mb-lg-0">
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ marginRight: "25px" }}
              >
                <span>Company</span>
              </NavLink>
              <ul className="dropdown-menu" style={{ width: "150%" }}>
                <li style={{ marginBottom: "5px" }}>
                  <NavLink to="/about" className="dropdown-item">
                    AboutUs
                  </NavLink>
                </li>
                <li style={{ marginBottom: "5px" }}>
                  <NavLink to="/ourteam" className="dropdown-item">
                    OurTeam
                  </NavLink>
                </li>
                <li style={{ marginBottom: "5px" }}>
                  <NavLink to="/oursolution" className="dropdown-item">
                    OurSolution
                  </NavLink>
                </li>
                <li style={{ marginBottom: "5px" }}>
                  <NavLink to="/career" className="dropdown-item">
                    Carrer Opertunity
                  </NavLink>
                </li>
                <li style={{ marginBottom: "5px" }}>
                  <NavLink className="dropdown-item">
                    Investors Relation
                  </NavLink>
                </li>
                <li style={{ marginBottom: "5px" }}>
                  <NavLink to="/blogs" className="dropdown-item">
                    Blog
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                style={{ marginRight: "25px" }}
              >
                <span>Support</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link"
                style={{ marginRight: "25px" }}
              >
                <span>Contact Us</span>
              </NavLink>
            </li>

            <button className="btn_btn">
              <NavLink to="https://play.google.com/store/apps/details?id=com.aaoochale"
                className="nav-link disabled"
                tabIndex={-1}
                aria-disabled="true"
                style={{ fontSize: "15px", color: "white" }}
              >
                Free Download
              </NavLink>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
