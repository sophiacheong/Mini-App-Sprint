var F2 = (props) => {
  return (
    <div>
      <input name="addy" placeholder="Insert FULL address" onChange={props.changeValue} />
      <input name="phone" placeholder="Phone number" onChange={props.changeValue} />
      <button onClick={props.changePage}>Next</button>
    </div>
  )
}

export default F2;