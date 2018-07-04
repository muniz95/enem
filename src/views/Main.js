import { Component } from 'inferno';
import { Link } from 'inferno-router';
import '../styles/Main.css';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editions: []
    };
  }
  
  componentWillMount () {
    this.setState({
      editions: [
        { id: 1, year: 2009 },
        { id: 2, year: 2010 },
        { id: 3, year: 2011 },
        { id: 4, year: 2012 },
        { id: 5, year: 2013 },
        { id: 6, year: 2014 },
        { id: 7, year: 2015 },
        { id: 8, year: 2016 },
        { id: 9, year: 2017 }
      ]
    })
  }
  
  render() {
    const { editions } = this.state;
    return (
      <div className="btn-container">
        { editions.map(edition => 
          <div className="btn-edition">
            <Link to={`edition/${edition.year}`} className="btn-box">
              {edition.year}
          </Link>
          </div>
        ) }
      </div>
    );
  }
}