class F2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.changePage}>
          <label htmlFor="line-one">Line 1:</label>
          <input type="text" id="line-one" name="line-one" />
          <label htmlFor="line-two">Line 2:</label>
          <input type="text" id="line-two" name="line-two" />
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" />
          <label htmlFor="state">State:</label>
          <input type="text" id="state" name="state" />
          <label htmlFor="zip_code">Zip Code:</label>
          <input type="text" id="zip_code" name="zip_code" />
          <button type="submit">Next</button>
        </form>
      </div>
    );
  }
}

export default F2;
