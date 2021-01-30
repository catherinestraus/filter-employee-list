function Employee({ employee }) {
  const { name, department, age } = employee;
  return (
    <div className="employee">
      <div>{name} </div>

      <div className="employee-metadata">
        <div
          className={`department-tag department-color-${department.toLowerCase()}`}
        >
          {department}
        </div>
        <div> {age} </div>
      </div>
    </div>
  );
}

export default Employee;
