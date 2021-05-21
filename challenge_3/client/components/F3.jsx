var F3 = (props) => {
  return (
    <div>
      <input name="card_number" placeholder="Credit Card Number" onChange={props.changeValue} />
      <input name="expiry" placeholder="Expiration Date" onChange={props.changeValue} />
      <input name="cvv" placeholder="CVV" onChange={props.changeValue} />
      <input name="zipcode" placeholder="Zipcode" onChange={props.changeValue} />
      <button onClick={props.changePage}>Next</button>
    </div>
  )
}

export default F3;