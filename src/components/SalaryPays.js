import React from "react";

function SalaryPays() {
  const getFieldValue = () => {};
  const addEmployee = () => {};
  return (
    <span class="border">
      <div className="d-flex p-2">
        <form
          className="ui form"
          onSubmit={(event) => {
            addEmployee(event);
          }}
        >
          <div className="form-row">
            <div className="form-group col-md-6">
              <h2>Enter Employee Payment Details</h2>
              <label htmlFor="inputEmail4">Select Employee From List</label>
              <div class="dropdown">
                <select
                  type="Number"
                  name="dept"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="employee n.o"
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
                <label htmlFor="inputEmail4">Date of Payment</label>
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
                <label htmlFor="inputEmail4">Account N.o</label>
                <input
                  type="Number"
                  name="empNumber"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="acc n.o"
                  onChange={getFieldValue}
                />

                <button type="submit" className="btn btn-info">
                  Authorize Payment
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </span>
  );
}
export default SalaryPays;
