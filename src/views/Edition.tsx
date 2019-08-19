import { Component } from 'inferno';
import { Link } from 'inferno-router';
import { RouteComponentProps } from 'inferno-router/dist/Route';
import Edition from 'models/Edition';
import '../styles/Edition.css';

interface IProps extends RouteComponentProps<any> {}

interface IState {
  edition: Edition;
}

export default class EditionView extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      edition: {} as Edition
    };
  }

  public componentWillMount() {
    const { year } = this.props.match.params;
    this.setState({
      edition: {
        applyDate: new Date(year, 11, 11),
        id: 0,
        year,
      }
    });
  }

  public render() {
    const { edition } = this.state;
    return (
      <div>
        <div className="columns">
          <div className="column">
            <h2>ENEM {edition.year}</h2>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <span>{`Data de aplicação: ${edition.applyDate.toLocaleString()}`}</span>
          </div>
        </div>
        <div className="columns">
          <div className="column div-edition">
            <Link to={`${edition.year}/quiz`} className="button is-primary">
              Começar quiz
                        </Link>
          </div>
        </div>
      </div>
    );
  }

}
