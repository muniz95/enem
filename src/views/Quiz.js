import Component from 'inferno-component';
import { Link } from 'inferno-router';
import Result from '../components/Result';
import '../styles/Quiz.css';
import 'purecss/build/grids-responsive-min.css';
import 'purecss/build/buttons-min.css';

export default class Quiz extends Component {
    checkAnswer(answer) {
        const { questions, currentQuestion } = this.state;
        this.setState({
            answers: [...this.state.answers, answer]
        });
        
        if (currentQuestion + 1 < questions.length) {
            this.setState({
                currentQuestion: this.state.currentQuestion + 1
            });
        } else {
            this.setState({finished: true});
        }
    }
    
    resetState() {
        this.setState({
            currentQuestion: 0
        });
    }
    
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            answers: [],
            currentQuestion: 0,
            finished: false,
            year: 0
        };
        
        this.checkAnswer = this.checkAnswer.bind(this);
        this.resetState = this.resetState.bind(this);
    }
    
    componentWillMount() {
        const { year } = this.props.params;
        this.setState({
            year,
            questions: [
                {
                    id: 1,
                    statement: 'Quanto é 2 + 2?',
                    alternatives: [
                        { text: '1', correct: false },
                        { text: '2', correct: false },
                        { text: '3', correct: false },
                        { text: '4', correct: true }
                    ]
                },
                {
                    id: 2,
                    statement: 'Quem descobriu o Brasil?',
                    alternatives: [
                        { text: 'Luis Inácio Lula da Silva', correct: false },
                        { text: 'Pedro Álvares Cabral', correct: true },
                        { text: 'Marechal Deodoro da Fonseca', correct: false },
                        { text: 'André Marques', correct: false }
                    ]
                },
                {
                    id: 3,
                    statement: 'b² + 4.a.c é parte integrante de qual fórmula?',
                    alternatives: [
                        { text: 'Torre de Hanói', correct: false },
                        { text: 'Teoria da relatividade', correct: false },
                        { text: 'Bhaskara', correct: true },
                        { text: 'Fórmula 1', correct: false }
                    ]
                },
                {
                    id: 4,
                    statement: 'Qual o significado da vida, do universo e tudo mais?',
                    alternatives: [
                        { text: '42', correct: true },
                        { text: '?????', correct: false },
                        { text: '?????', correct: false },
                        { text: '?????', correct: false }
                    ]
                },
            ]
        });
    }
    
    render() {
        const { questions, answers, currentQuestion: i, finished, year } = this.state;
        let page;
        if (finished) {
            page = <div>
                <Result questions={questions} answers={answers} />
                <div className="pure-g">
                  <div className="pure-u-xl-1-2 pure-u-lg-1-2 pure-u-md-1-2 pure-u-sm-1-4">
                    <Link to={`/edition/${year}`} className="pure-button back">
                      Voltar
                    </Link>
                  </div>
                  <div className="pure-u-xl-1-2 pure-u-lg-1-2 pure-u-md-1-2 pure-u-sm-1-4">
                    <button onClick={this.resetState} className="pure-button restart">
                      Refazer
                    </button>
                  </div>
                </div>
              </div>;
        } else {
            page = (
                <div>
                    <div className="pure-g">
                        <div className="pure-u-1">
                            {`${questions[i].id}) ${questions[i].statement}`}
                        </div>
                    </div>
                    <div className="pure-g">
                        {questions[i].alternatives.map(alt => 
                            <div className="pure-u-xl-1-2 pure-u-lg-1-2 pure-u-md-1-2 pure-u-sm-1">
                                <div
                                    className="Quiz-alternative"
                                    onClick={() => this.checkAnswer(alt)}>
                                    {alt.text}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            );
        }
        return page;
    }
}