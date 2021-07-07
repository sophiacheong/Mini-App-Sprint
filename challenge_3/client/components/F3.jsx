/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
const F3 = ({ updateForm, submitForm }) => (
  <div>
    <form onSubmit={(e) => submitForm(e)}>
      <label htmlFor="card_number">Card #:</label>
      <input type="text" id="card_number" name="card_number" onChange={(e) => updateForm(e)} />
      <label htmlFor="expiration_date">Expiration date:</label>
      <input type="text" id="expiration_date" name="expiration_date" onChange={(e) => updateForm(e)} />
      <label htmlFor="CVV">CVV:</label>
      <input type="text" id="CVV" name="CVV" onChange={(e) => updateForm(e)} />
      <label htmlFor="zip_code">Billing Zip Code:</label>
      <input type="text" id="zip_code" name="zip_code" onChange={(e) => updateForm(e)} />
      <button type="submit">Next</button>
    </form>
  </div>
);

export default F3;
