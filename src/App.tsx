import styles from './App.module.scss';
import questions from "./Questions.json";
import QuestionComp from './components/Question';
import StatBar from './components/StatBar';
import Reset from './components/reset';
import { Questions } from "./types";
import { useState } from 'react';
import Answer_module from './components/Answer.module.scss';
import Classnames from 'classnames';

function App() {
    const allQuestions = questions as Questions
    const [currentQuestionIdx, setcurrentQuestionIdx] = useState(0);
    const [correctAnswers, setcorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    const [waitingToAdvance, setwaitingToAdvance] = useState(false)
    const onSubmit = (correct: boolean) => {
        if (correct) setcorrectAnswers(correctAnswers + 1);
        else setIncorrectAnswers(incorrectAnswers + 1);
        setwaitingToAdvance(true);
    };
    const advance = () => {
        setwaitingToAdvance(false);
        setcurrentQuestionIdx(currentQuestionIdx + 1);
    };
    const reset = () => {
        setcurrentQuestionIdx(0);
        setcorrectAnswers(0);
        setIncorrectAnswers(0);
        setwaitingToAdvance(false);
    };
    if (currentQuestionIdx >= allQuestions.questions.length) return (
        <Reset totalQuestions={allQuestions.questions.length}
            correctQuestion={correctAnswers}
            OnPress={reset} />);

    return (

        <div>

            <StatBar cuurentQuestion={currentQuestionIdx + 1}
                totalQuestions={allQuestions.questions.length}
                correct={correctAnswers}
                incorrect={incorrectAnswers}
            />
            <QuestionComp
                question={allQuestions.questions[currentQuestionIdx]}
                onSubmit={onSubmit}
            />
            {waitingToAdvance && <button onClick={advance} className={styles['next-btn']}>Next Question</button>}
        </div>
    );
}

export default App;
