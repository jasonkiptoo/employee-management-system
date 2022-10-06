import React from "react";

function Employee({ employee }) {
  const { id, name, email, birthDate, dept, image, empTerms } = employee;
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{birthDate}</td>
      <td>{dept}</td>
      <td>{empTerms}</td>

      <td>
        <img src={image} width="50px" />
      </td>
      <td>
        <button className="btn btn-success">Edit</button>
      |
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
}
export default Employee;
