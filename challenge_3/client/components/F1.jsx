var F1 = (props) => {
  return (
    <div>
      <input name="name" placeholder="Insert name" onChange={props.changeValue} />
      <input name="email" placeholder="Insert e-mail" onChange={props.changeValue} />
      <input name="password" placeholder="Password" onChange={props.changeValue} />
      <button onClick={props.changePage}>Next</button>
    </div>
  )
}

export default F1