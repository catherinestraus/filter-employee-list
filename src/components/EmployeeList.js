import Employee from "./Employee";

function EmployeeList({ employees }) {
  return (
    <div id="employee-list">
      <div>
        {employees.map((employee, index) => {
          return <Employee key={index} employee={employee} />;
        })}
      </div>
    </div>
  );
}

export default EmployeeList;
