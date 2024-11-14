import Item from './Item';
import style from './List.module.scss'
import ITarefa from '../../types/tarefa';

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function ListComponent({ tarefas, selecionaTarefa }: Props) {

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        tarefa={item.tarefa} tempo={item.tempo} selecionado={false} completado={false} id={''} />
                ))}
            </ul>
        </aside>
    )
}

export default ListComponent;