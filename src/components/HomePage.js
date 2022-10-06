import React, { useEffect } from "react";
import Home from "./Home";
import AddNewEmployee from "./AddNewEmployee";
import EmployeeList from "./EmployeeList";
import NavBar from "./NavBar";
import { useState } from "react";
import SalaryPays from "./SalaryPays";
import PendingSalaries from "./PendingSalaries";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function HomePage() {
  const [employee, setEmployee] = useState([]);

  const handleAdd = (employeeData) => {
    fetch(" http://localhost:3000/users", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employeeData),
    });
  };

  function userList() {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setEmployee(data));
  }
  useEffect(() => {
    userList();
  }, []);
  return (
    <div>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Home emp={employee} />} />
        <Route
          exact
          path="/addnewemployee"
          element={<AddNewEmployee onSubmit={handleAdd} />}
        />
        <Route
          exact
          path="/employeelist"
          element={<EmployeeList userList={employee} />}
        />
        <Route exact path="/salarypayments" element={<SalaryPays />} />
        <Route exact path="/pendingsalaries" element={<PendingSalaries />} />
      </Routes>
    </div>
  );
}
export default HomePage;
