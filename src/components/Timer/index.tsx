import Button from "../Button"
import Clock from "./Clock"
import style from './Timer.module.scss'

function timerComponent() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock />
            </div>
            <Button texto='Iniciar' />
        </div>
    )
}

export default timerComponent