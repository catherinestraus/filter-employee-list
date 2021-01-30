import React from "react";

class RangeBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { ageRange, handleAgeRange } = this.props;
    const [minimum, maximum] = ageRange;

    return (
      <div className="filter-input">
        <div>
          <label for="range-selector-min">Min Age: {minimum}</label>
          <input
            value={minimum}
            name="range-selector-min"
            class="range-selector-min"
            type="range"
            min="0"
            max="100"
            onChange={(e) => {
              const newValue = Number(e.target.value);

              if (newValue < maximum) {
                handleAgeRange(newValue, maximum);
              }
            }}
          />
        </div>

        <div>
          <label for="range-selector-max">Max Age: {maximum}</label>
          <input
            value={maximum}
            name="range-selector-max"
            class="range-selector-max"
            type="range"
            min="0"
            max="100"
            onChange={(e) => {
              const newValue = Number(e.target.value);

              if (newValue > minimum) {
                handleAgeRange(minimum, newValue);
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default RangeBar;
