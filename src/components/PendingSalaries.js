import React from "react";
import Employee from "./Employee";

function PendingSalaries() {
  return (
    <div className="table-design">
      <table className="table table-striped">
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
              <h3 className="ui center aligned header">Date of Processing</h3>
            </th>
            <th>            
              <h3 >Department</h3>
            </th>
            <th>
              <h3>Action</h3>
            </th>
           
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default PendingSalaries;
