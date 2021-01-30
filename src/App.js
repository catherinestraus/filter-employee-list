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

    let filteredByName = [];
    if (search.length > 0) {
      for (let i = 0; i < employees.length; i++) {
        let employee = employees[i];
        if (employee.name.toLowerCase().includes(search.toLowerCase())) {
          filteredByName.push(employee);
        }
      }
    } else {
      filteredByName = employees.slice();
    }

    let filteredByAge = [];
    if (ageRange[0] !== 0 || ageRange[1] !== 100) {
      for (let i = 0; i < filteredByName.length; i++) {
        let employee = filteredByName[i];
        if (employee.age >= ageRange[0] && employee.age <= ageRange[1]) {
          filteredByAge.push(employee);
        }
      }
    } else {
      filteredByAge = filteredByName;
    }

    let filteredByDepartment = [];
    if (department.length > 0) {
      for (let i = 0; i < filteredByAge.length; i++) {
        let employee = filteredByAge[i];
        if (employee.department === department) {
          filteredByDepartment.push(employee);
        }
      }
    } else {
      filteredByDepartment = filteredByAge;
    }

    return (
      <div id="container">
        <div id="filters">
          <div id="title"> Find Employees </div>
          <SearchBar handleSearch={this.handleSearch} />
          <RangeBar ageRange={ageRange} handleAgeRange={this.handleAgeRange} />
          <DepartmentBar handleDepartment={this.handleDepartment} />
        </div>

        <EmployeeList employees={filteredByDepartment} />
      </div>
    );
  }
}

export default App;
