import React from "react";
import { useState } from "react";

function AddNewEmployee({ onSubmit, addEmployee }) {
  const [emp, setEmp] = useState([]);
  function getFieldValue(event) {
    setEmp({ ...emp, [event.target.name]: event.target.value });
  }
  function addEmployee(event) {
    onSubmit(emp);
  }
  return (
    <div>
      <div row g-3 align-items-center>
        <form
          className="ui form"
          onSubmit={(event) => {
            addEmployee(event);
          }}
        >
          <div className="form-row">
            <div className="form-group col-md-6">
              <h2>Add Employee Details</h2>
              <label htmlFor="inputEmail4">Name</label>
              <input
                type="name"
                name="name"
                className="form-control"
                id="inputEmail4"
                placeholder="John Doe"
                onChange={getFieldValue}
              />

              <label htmlFor="inputEmail4">Email</label>
              <input
                type="text"
                name="email"
                className="form-control"
                id="inputEmail4"
                placeholder="email@email.com"
                onChange={getFieldValue}
              />
              <label htmlFor="inputEmail4">Date of Birth</label>
              <input
                type="date"
                name="birthDate"
                className="form-control"
                id="inputEmail4"
                placeholder="email@email.com"
                onChange={getFieldValue}
              />
              <label htmlFor="inputEmail4">Employee Number</label>
              <input
                type="Number"
                name="empNumber"
                className="form-control"
                id="inputEmail4"
                placeholder="employee n.o"
                onChange={getFieldValue}
              />

              <label>Department</label>
              <div class="dropdown">
                <select
                  type="Number"
                  name="dept"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="employee n.o"
                  onChange={getFieldValue}
                >
                  <option>Select</option>
                  <option>Sales & Marketing</option>
                  <option>ICT</option>
                  <option>Human Resource</option>
                  <option>Accounts Dept.</option>
                </select>

                <label>Employement Terms</label>
                <div class="dropdown">
                  <select
                    type="text"
                    name="empTerms"
                    className="form-control"
                    id="inputEmail4"
                    onChange={getFieldValue}
                  >
                    <option>Select</option>
                    <option>Permanent</option>
                    <option>Contract</option>
                  </select>
                </div>
                <br></br>
                <label htmlFor="inputEmail4">Salary</label>
                <input
                  type="nuber"
                  name="empSalary"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Amount in Ksh"
                  onChange={getFieldValue}
                />
                <label>Image url</label>
                <input
                  type="nuber"
                  name="image"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="http://...."
                  onChange={getFieldValue}
                />
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddNewEmployee;
