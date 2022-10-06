import React from "react";
import { Link } from "react-router-dom";
const linkStyles = {
  width: "150px",
  padding: "15px",

  textDecoration: "none",
  color: "white",
};
function navBar() {
  return (
    <nav class="navbar sticky-top bg-primary">
      <button class="navbar-button">
        <Link to="/" style={linkStyles}>
          Home
        </Link>
      </button>
      <button class="navbar-button">
        <Link to="addnewemployee" style={linkStyles}>
          Add Employee
        </Link>
      </button>
      <button class="navbar-button">
        <Link to="employeelist" style={linkStyles}>
          Employee List
        </Link>
      </button>
      <button class="navbar-button">
        <Link to="salarypayments" style={linkStyles}>
          Salary Payments
        </Link>
      </button>
      <button class="navbar-button">
        <Link to="pendingsalaries" style={linkStyles}>
          Pending Payment
        </Link>
      </button>
      <button class="navbar-button" space-x-0style={linkStyles}>
        Login | | Sign in
      </button>
    </nav>
  );
}
export default navBar;
