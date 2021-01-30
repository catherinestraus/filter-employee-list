import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  render() {
    const { value } = this.state;
    return (
      <div className="filter-input">
        <input
          id="search-bar"
          autoFocus
          placeholder="Search for employee..."
          value={value}
          type="text"
          onChange={(e) => {
            const newValue = e.target.value;
            this.setState({
              value: newValue,
            });
            this.props.handleSearch(newValue);
          }}
        />
      </div>
    );
  }
}

export default SearchBar;
