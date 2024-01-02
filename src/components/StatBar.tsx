
import StatBar_module from './StatBar.module.scss'; type Props = {
    cuurentQuestion: number;
    totalQuestions: number;
    correct: number;
    incorrect: number;
}


function StatBar(props: Props) {
    return <div className={StatBar_module.StatContainer}>
        <p>Question:{props.cuurentQuestion}/{props.totalQuestions}</p>
 
        <p>Correct: {props.correct}</p>
        <p>Incorrect: {props.incorrect}</p>
    </div>
}
export default StatBar