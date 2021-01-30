import "./App.css";
import React from "react";
import employees from "./data";
import SearchBar from "./components/filters/SearchBar";
import RangeBar from "./components/filters/RangeBar";
import DepartmentBar from "./components/filters/DepartmentBar";

import EmployeeList from "./components/EmployeeList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: employees,
      search: "",
      ageRange: [0, 100],
      department: "",
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleAgeRange = this.handleAgeRange.bind(this);
    this.handleDepartment = this.handleDepartment.bind(this);
  }

  handleSearch(input) {
    this.setState({
      search: input,
    });
  }

  handleAgeRange(start, end) {
    this.setState({
      ageRange: [start, end],
    });
  }

  handleDepartment(input) {
    this.setState({
      department: input,
    });
  }

  render() {
    const { search, employees, ageRange, department } = this.state;

    // filter name
    let filter1 = [];
    if (search.length > 0) {
      for (let i = 0; i < employees.length; i++) {
        let employee = employees[i];
        if (employee.name.toLowerCase().includes(search.toLowerCase())) {
          filter1.push(employee);
        }
      }
    } else {
      filter1 = employees.slice();
    }

    // filter age
    let filter2 = [];
    if (ageRange[0] !== 0 || ageRange[1] !== 100) {
      for (let i = 0; i < filter1.length; i++) {
        let employee = filter1[i];
        if (employee.age >= ageRange[0] && employee.age <= ageRange[1]) {
          filter2.push(employee);
        }
      }
    } else {
      filter2 = filter1;
    }

    // filter department
    let filter3 = [];
    if (department.length > 0) {
      for (let i = 0; i < filter2.length; i++) {
        let employee = filter2[i];
        if (employee.department === department) {
          filter3.push(employee);
        }
      }
    } else {
      filter3 = filter2;
    }

    return (
      <div>
        <div id="title"> Search Employees </div>
        <SearchBar handleSearch={this.handleSearch} />
        <RangeBar ageRange={ageRange} handleAgeRange={this.handleAgeRange} />
        <DepartmentBar handleDepartment={this.handleDepartment} />

        <EmployeeList employees={filter3} />
      </div>
    );
  }
}

export default App;
