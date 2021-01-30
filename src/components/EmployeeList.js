import Employee from "./Employee";

function EmployeeList({ employees }) {
  return (
    <div>
      {employees.map((employee, index) => {
        return <Employee key={index} employee={employee} />;
      })}
    </div>
  );
}

export default EmployeeList;
