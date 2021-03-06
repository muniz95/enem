import '../styles/Result.css';

const Result = ({questions, answers}) => (
    <div>
        <div className="columns">
            <div className="column">
                <b>Acertos:</b> {answers.filter(answer => answer.correct).length}
            </div>
            <div className="column">
                <b>Erros:</b> {answers.filter(answer => !answer.correct).length}
            </div>
        </div>
        {questions.map((question, i) => 
            <p>
                <b>{question.statement}</b> 
                {answers[i].correct
                ?   
                    <div className="correct">{answers[i].text}</div>
                :   
                    <div>
                        <div className="incorrect">{answers[i].text}</div>
                        <div className="correct">{question.alternatives.find(a => a.correct).text}</div>
                    </div>
                }
            </p>
        )}
    </div>
);
export default Result;