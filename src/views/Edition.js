import Component from 'inferno-component';

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
                applyDate: new Date(year, 11, 11),
                questions: [
                    { 
                        statement: 'Quanto é 2 + 2?',
                        alternatives: [
                            { text: '1', correct: false },
                            { text: '2', correct: false },
                            { text: '3', correct: false },
                            { text: '4', correct: true }
                        ]
                    }
                ]
            }
        })
    }

    render () {
        const { edition } = this.state;
        return (
            <div>
                <h2>ENEM {edition.year}</h2>
                <div className="pure-g">
                    <div className="pure-u-1">
                        <span>{`Data de aplicação: ${edition.applyDate.toLocaleString()}`}</span>
                    </div>
                </div>
            </div>
        );
    }
    
}