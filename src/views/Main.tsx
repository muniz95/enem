import { Component } from 'inferno';
import { Link } from 'inferno-router';
import Edition from 'models/Edition';
import '../styles/Main.css';

interface IState {
  editions: Edition[];
}

export default class Main extends Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      editions: []
    };
  }

  public componentWillMount() {
    this.setState({
      editions: [
        { id: 1, year: 2009 } as Edition,
        { id: 2, year: 2010 } as Edition,
        { id: 3, year: 2011 } as Edition,
        { id: 4, year: 2012 } as Edition,
        { id: 5, year: 2013 } as Edition,
        { id: 6, year: 2014 } as Edition,
        { id: 7, year: 2015 } as Edition,
        { id: 8, year: 2016 } as Edition,
        { id: 9, year: 2017 } as Edition,
      ]
    });
  }

  public render() {
    const { editions } = this.state;
    return (
      <div className="columns is-mobile is-multiline">
        {editions.map((edition) =>
          <div className="column is-one-quarter-desktop is-half-mobile is-half-tablet">
            <Link to={`edition/${edition.year}`} className="button is-info">{edition.year}</Link>
          </div>
        )}
      </div>
    );
  }
}
