import { Component } from 'inferno';
import { Link } from 'inferno-router';
import '../styles/Edition.css';

export default class Edition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edition: {}
    }
  }
  
  componentWillMount () {
    const { year } = this.props.match.params;
    this.setState({
      edition: {
        year,
        applyDate: new Date(year, 11, 11)
      }
    })
  }

  render () {
    const { edition } = this.state;
    return (
      <div className="container column">
        <h2>ENEM {edition.year}</h2>
        <span>{`Data de aplicação: ${edition.applyDate.toLocaleString()}`}</span>
        <Link to={`${edition.year}/quiz`} className="btn-primary">
          Começar quiz
        </Link>
      </div>
    );
  }
    
}