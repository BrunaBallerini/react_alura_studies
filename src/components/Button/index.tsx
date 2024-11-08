import style from './Button.module.scss'

function Button(props: { textButton: any; onClick: any; }) {
    const { textButton, onClick } = props;


    return (
        <button className={style.botao} onClick={onClick}>{textButton}</button>
    )
}

export default Button;