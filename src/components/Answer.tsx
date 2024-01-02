
import Answer_module from './Answer.module.scss'; type Props = {
    OnPress: () => void
    text: string;
    color?: string
    disabled?: boolean
}


function Answer(props: Props) {
    return (
        <button disabled={props.disabled} onClick={props.OnPress} className={Answer_module.answer}>
            <span style={props.color ? { color: props.color } : {}}>{props.text}</span> </button>
    )

}
export default Answer