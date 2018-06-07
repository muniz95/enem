import { Component } from 'inferno';
import { Link } from 'inferno-router';
import Result from '../components/Result';
import '../styles/Quiz.css';

export default class Quiz extends Component {
    checkAnswer(e, answer) {
        console.log(e.target.style);
        e.target.style.backgroundColor = '#32fdf4';
        const { questions, currentQuestion } = this.state;
        this.setState({
            answers: [...this.state.answers, answer]
        });
        
        setTimeout(() => {
            if (currentQuestion + 1 < questions.length) {
                this.setState({
                    currentQuestion: this.state.currentQuestion + 1
                });
            } else {
                this.setState({finished: true});
            }
            e.target.style.backgroundColor = '';
        }, 250);
    }
    
    resetState() {
        this.setState({
            currentQuestion: 0,
            answers: [],
            finished: false
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
        const { year } = this.props.match.params;
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
                <div className="columns">
                  <div className="column is-half-tablet is-half-desktop">
                    <Link to={`/edition/${year}`} className="button is-primary">
                      Voltar
                    </Link>
                  </div>
                  <div className="column is-half-tablet is-half-desktop">
                    <button onClick={this.resetState} className="button is-warning">
                      Refazer
                    </button>
                  </div>
                </div>
              </div>;
        } else {
            page = (
                <div>
                    <div className="columns">
                        <div className="column">
                            <h3>{`${questions[i].id}) ${questions[i].statement}`}</h3>
                        </div>
                    </div>
                    <div className="columns is-multiline">
                        {questions[i].alternatives.map(alt => 
                            <div className="column is-6-desktop">
                                <div
                                    className="Quiz-alternative"
                                    onClick={(e) => this.checkAnswer(e, alt)}>
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