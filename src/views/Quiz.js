import Component from 'inferno-component';
import '../styles/Quiz.css';
import 'purecss/build/grids-responsive-min.css';
import 'purecss/build/buttons-min.css';

export default class Quiz extends Component {
    checkAnswer({correct}) {
        const { questions, currentQuestion, hits, misses } = this.state;
        if (correct) {
            this.setState({hits: hits + 1});
        } else {
            this.setState({misses: misses + 1});
        }
        
        if (currentQuestion + 1 < questions.length) {
            this.setState({
                currentQuestion: this.state.currentQuestion + 1
            });
        } else {
            alert('acabou o quiz');
            alert(`${this.state.hits} acertos e ${this.state.misses} erros.`);
            this.resetState();
        }
    }
    
    resetState() {
        this.setState({
            hits: 0,
            misses: 0,
            currentQuestion: 0
        });
    }
    
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            hits: 0,
            misses: 0,
            currentQuestion: 0
        };
        
        this.checkAnswer = this.checkAnswer.bind(this);
    }
    
    componentWillMount() {
        this.setState({
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
        const { questions, currentQuestion: i } = this.state;
        return (
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
}