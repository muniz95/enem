export default function Result({questions, answers}) {
    return (
        <div>
            {questions.map((question, i) => 
                <p>
                    <b>{question.statement}</b>: {answers[i].text}
                </p>
            )}
        </div>
    );
}