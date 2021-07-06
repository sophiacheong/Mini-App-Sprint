/* eslint-disable react/no-access-state-in-setstate */
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
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.props.submitAddress(e)}>
          <label htmlFor="line_one">Line 1:</label>
          <input type="text" id="line_one" name="line_one" onChange={(e) => this.props.updateForm(e)} />
          <label htmlFor="line_two">Line 2:</label>
          <input type="text" id="line_two" name="line_two" onChange={(e) => this.props.updateForm(e)} />
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" onChange={(e) => this.props.updateForm(e)} />
          <label htmlFor="state">State:</label>
          <input type="text" id="state" name="state" onChange={(e) => this.props.updateForm(e)} />
          <label htmlFor="zip">Zip Code:</label>
          <input type="text" id="zip" name="zip" onChange={(e) => this.props.updateForm(e)} />
          <button type="submit">Next</button>
        </form>
      </div>
    );
  }
}

export default F2;
