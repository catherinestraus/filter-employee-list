import React from "react";

class DepartmentBar extends React.Component {
  static TYPES = ["Music", "Film", "Sports"];

  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  render() {
    const { value } = this.state;
    return (
      <select
        value={value}
        id="categories"
        onChange={(e) => {
          const newValue = e.target.value;
          this.setState({
            value: newValue,
          });
          this.props.handleDepartment(newValue);
        }}
      >
        <option value="">Select Department</option>

        {DepartmentBar.TYPES.map((department, i) => (
          <option value={department} key={i}>
            {department}
          </option>
        ))}
      </select>
    );
  }
}

export default DepartmentBar;
