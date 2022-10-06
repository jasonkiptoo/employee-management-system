import React from "react";
import Employee from "./Employee";

function EmployeeList({ userList }) {
  const employeeList = userList.map((employee) => (
    <Employee key={employee.id} employee={employee} image={employee.image} />
  ));
  return (
    <div className="table-design">
      <table class="table table-striped">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header">ID</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Name</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Email</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">D.o.B</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Dept.</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Terms</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Profile</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Action</h3>
            </th>
          </tr>
          {employeeList}
        </tbody>
      </table>
    </div>
  );
}
export default EmployeeList;
