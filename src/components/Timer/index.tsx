import { useState } from "react"
import ITarefa from "../../types/tarefa"
import Button from "../Button"
import Clock from "./Clock"
import style from './Timer.module.scss'
import { tempoParaSegundos } from '../../common/utils/time';

interface Props {
    selecionado: ITarefa | undefined
}


function TimerComponent({ selecionado }: Props) {

    const [tempo, setTempo] = useState<number>();

    if (selecionado?.tempo) {
        setTempo(tempoParaSegundos(selecionado?.tempo));
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
            Tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Clock />
            </div>
            <Button textButton='Iniciar' onClick={() => { }} />
        </div>
    )
}

export default TimerComponent