const F3 = () => (
  <div>
    <form>
      <label htmlFor="card_number">Card #:</label>
      <input type="text" id="card_number" name="card_number" />
      <label htmlFor="expiration_date">Expiration date:</label>
      <input type="text" id="expiration_date" name="expiration_date" />
      <label htmlFor="CVV">CVV:</label>
      <input type="text" id="CVV" name="CVV" />
      <label htmlFor="zip_code">Billing Zip Code:</label>
      <input type="text" id="zip_code" name="zip_code" />
      <button type="submit">Next</button>
    </form>
  </div>
);

export default F3;
