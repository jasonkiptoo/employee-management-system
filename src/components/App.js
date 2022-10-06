import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";
import AddNewEmployee from "./AddNewEmployee";
import SalaryPays from "./SalaryPays";
import PendingSalaries from "./PendingSalaries";
import EmployeeList from "./EmployeeList";
import NavBar from "./NavBar";

function App({ handleAdd, employee }) {
  return (
    <div className="App">
     <HomePage/>
    </div>
  );
}

export default App;
