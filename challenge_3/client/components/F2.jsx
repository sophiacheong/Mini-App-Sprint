/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/label-has-associated-control */
class F2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      line_one: '',
      line_two: '',
      city: '',
      zip_code: 0,
      state: '',
    };
    this.updateAddress = this.updateAddress.bind(this);
  }

  updateAddress(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.changePage}>
          <label htmlFor="line_one">Line 1:</label>
          <input type="text" id="line_one" name="line_one" onChange={(e) => this.updateAddress(e)} />
          <label htmlFor="line_two">Line 2:</label>
          <input type="text" id="line_two" name="line_two" onChange={(e) => this.updateAddress(e)} />
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" onChange={(e) => this.updateAddress(e)} />
          <label htmlFor="state">State:</label>
          <input type="text" id="state" name="state" onChange={(e) => this.updateAddress(e)} />
          <label htmlFor="zip_code">Zip Code:</label>
          <input type="text" id="zip_code" name="zip_code" onChange={(e) => this.updateAddress(e)} />
          <button type="submit">Next</button>
        </form>
      </div>
    );
  }
}

export default F2;
