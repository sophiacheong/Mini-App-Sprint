import F1 from './components/F1.js';
import F2 from './components/F2.js';
import F3 from './components/F3.js';
import F4 from './components/F4.js';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      page: 0,
      name: '',
      email: '',
      password: '',
      addy: '',
      phone: '',
      card_number: 0,
      expiry: 0,
      cvv: 0,
      zipcode: 0
    }
    this.changePage = this.changePage.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.submitServer = this.submitServer.bind(this);
  }

  submitServer() {
    axios.post('/api', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      addy: this.state.address,
      phone: Number(this.state.phone),
      card_number: Number(this.state.card_number),
      expiry: Number(this.state.expiry),
      cvv: Number(this.state.cvv),
      zipcode: Number(this.state.zipcode)
    })
    .then(() => {
      alert('Order Confirmed')
    })
    .catch((err) => console.error(err))
  }

  changeValue(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  changePage() {
    if (this.state.page < 4) {
      this.setState({
        page: this.state.page + 1
      })
    } else {
      this.setState({
        page: 0
      })
    }
  }

  render() {
    return (
      <div>
      {this.state.page === 0 ? <button onClick={this.changePage}>Check Out</button> : null}
      {this.state.page === 1 ? <F1 changePage={this.changePage} changeValue={this.changeValue} /> : null}
      {this.state.page === 2 ? <F2 changePage={this.changePage} changeValue={this.changeValue} /> : null}
      {this.state.page === 3 ? <F3 changePage={this.changePage} changeValue={this.changeValue} /> : null}
      {this.state.page === 4 ?
        <div>
          <div>Name: {this.state.name} </div>
          <div>E-mail: {this.state.email} </div>
          <div>Password: {this.state.password} </div>
          <div>Address: {this.state.addy} </div>
          <div>Phone Number: {this.state.phone} </div>
          <div>Card Number: {this.state.card_number} </div>
          <div>Expiration Date: {this.state.expiry} </div>
          <div>CVV: {this.state.cvv} </div>
          <div>Zipcode: {this.state.zipcode} </div>
          <button onClick={() => {
            this.changePage();
            this.submitServer();
          }}>Confirmed!</button>
        </div>
      : null}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));