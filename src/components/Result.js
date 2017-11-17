import '../styles/Result.css';
import "purecss/build/grids-responsive-min.css";

export default function Result({questions, answers}) {
    return (
        <div>
            <div className="pure-g">
                <div className="pure-u-1">
                    <b>Acertos:</b> {answers.filter(answer => answer.correct).length}
                </div>
                <div className="pure-u-1">
                    <b>Erros:</b> {answers.filter(answer => !answer.correct).length}
                </div>
            </div>
            {questions.map((question, i) => 
                <p>
                    <b>{question.statement}</b> {
                        answers[i].correct
                        ?
                            <div className="correct">{answers[i].text}</div>
                        :
                            <div>
                                <div className="incorrect">{answers[i].text}</div>
                                <div className="correct">&nbsp;{question.alternatives.find(a => a.correct).text}</div>
                            </div>
                    }
                </p>
            )}
        </div>
    );
}