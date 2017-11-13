import Component from 'inferno-component';
import './Main.css';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }
    
    render() {
        return (
            <div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}