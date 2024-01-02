
import Reset_module from './reset.module.scss'; type Props = {
    totalQuestions: number;
    correctQuestion: number;
    OnPress: () => void;
}

function Reset(props: Props) {
    return (
        <div onClick={props.OnPress} className={Reset_module.Reset}>
            <h1 className={Reset_module.Reset}>You scored:{(props.correctQuestion / props.totalQuestions) * 100}%</h1>
            <button onClick={props.OnPress} className={Reset_module['reset-btn']}>Press to try again.</button>
        </div>
    )
}
export default Reset