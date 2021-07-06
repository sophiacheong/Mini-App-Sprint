/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
import F1 from './F1.js';
import F2 from './F2.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pg: 0,
    };
    this.changePage = this.changePage.bind(this);
  }

  changePage() {
    this.setState({
      pg: this.state.pg + 1,
    });
  }

  render() {
    return (
      <div>
        {this.state.pg === 0 ? <F1 changePage={this.changePage} /> : null}
        {this.state.pg === 1 ? <F2 pg={this.state.pg} /> : null}
      </div>
    );
  }
}

export default App;
