import Component from 'inferno-component';
import { Link } from 'inferno-router';
import '../styles/Edition.css';
import 'purecss/build/grids-responsive-min.css';
import 'purecss/build/buttons-min.css';

export default class Edition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edition: {}
        }
    }
    
    componentWillMount () {
        const { year } = this.props.params;
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
            <div>
                <div className="pure-g">
                    <div className="pure-u-1">
                        <h2>ENEM {edition.year}</h2>
                    </div>
                </div>
                <div className="pure-g">
                    <div className="pure-u-1">
                        <span>{`Data de aplicação: ${edition.applyDate.toLocaleString()}`}</span>
                    </div>
                </div>
                <div className="pure-g">
                    <div className="pure-u-1 div-edition">
                        <Link to={`${edition.year}/quiz`} className="pure-button pure-button-primary">
                            Começar quiz
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
    
}