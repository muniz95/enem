import '../styles/Result.css';

export default function Result({questions, answers}) {
    return (
        <div>
            {questions.map((question, i) => 
                <p>
                    <b>{question.statement}</b> {
                        answers[i].correct
                        ?
                            <div className="correct">{answers[i].text}</div>
                        :
                            <div>
                                <div className="incorrect" style="display: inline-block;">{answers[i].text}</div>
                                <div className="correct" style="display: inline-block;">&nbsp;{question.alternatives.find(a => a.correct).text}</div>
                            </div>
                    }
                </p>
            )}
        </div>
    );
}