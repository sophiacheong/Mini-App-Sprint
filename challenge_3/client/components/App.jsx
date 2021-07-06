/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
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
    };
    this.changePage = this.changePage.bind(this);
    this.updateForm = this.updateForm.bind(this);
  }

  updateForm(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  changePage(e) {
    e.preventDefault();
    this.setState({
      pg: this.state.pg + 1,
    });
  }

  render() {
    return (
      <div>
        {this.state.pg === 0 ? <F1 changePage={this.changePage} updateForm={this.updateForm} /> : null}
        {this.state.pg === 1 ? <F2 changePage={this.changePage} updateForm={this.updateForm} /> : null}
        {this.state.pg === 2 ? <F3 updateForm={this.updateForm} /> : null}
      </div>
    );
  }
}

export default App;
