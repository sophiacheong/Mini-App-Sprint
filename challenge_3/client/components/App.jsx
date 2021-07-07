/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
// import axios from 'axios';
import F1 from './F1.js';
import F2 from './F2.js';
import F3 from './F3.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pg: 0,
      name: '',
      password: '',
      email: '',
      address: '',
      phone_number: 0,
      card_number: 0,
      expiration_date: 0,
      CVV: 0,
      zip_code: 0,
      line_one: '',
      line_two: '',
      city: '',
      zip: 0,
      state: '',
    };
    this.changePage = this.changePage.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.submitAddress = this.submitAddress.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateForm(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitAddress(e) {
    e.preventDefault();
    this.setState({
      address: `${this.state.line_one} ${this.state.line_two}, ${this.state.city}, ${this.state.state} ${this.state.zip}`,
      pg: this.state.pg + 1,
    });
  }

  changePage(e) {
    e.preventDefault();
    if (e.target.name === 'card_number' || e.target.name === 'expiration_date' || e.target.name === 'CVV' || e.target.name === 'zip_code') {
      this.setState({ [e.target.name]: Number(e.target.value) });
    } else {
      this.setState({
        pg: this.state.pg + 1,
      });
    }
  }

  submitForm(e) {
    e.preventDefault();
    axios.post('http://localhost:3000/f1', this.state)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
    this.setState({
      pg: 0,
    });
  }

  render() {
    return (
      <div>
        {this.state.pg === 0 ? <F1 changePage={this.changePage} updateForm={this.updateForm} /> : null}
        {this.state.pg === 1 ? <F2 updateForm={this.updateForm} submitAddress={this.submitAddress} /> : null}
        {this.state.pg === 2 ? <F3 updateForm={this.updateForm} submitForm={this.submitForm} /> : null}
      </div>
    );
  }
}

export default App;
