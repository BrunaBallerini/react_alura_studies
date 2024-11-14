import { useEffect, useState } from "react"
import ITarefa from "../../types/tarefa"
import Button from "../Button"
import Clock from "./Clock"
import style from './Timer.module.scss'
import { tempoParaSegundos } from '../../common/utils/time';

interface Props {
    selecionado: ITarefa | undefined
}

export default function TimerComponent({ selecionado }: Props) {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    }, [selecionado])

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
            Tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Clock />
            </div>
            <Button textButton='Iniciar' onClick={() => { console.log('Tentativa'); }} />
        </div>
    )
}