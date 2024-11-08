import { useState } from 'react';
import Item from './Item';
import style from './List.module.scss'

function ListComponent() {
    const [tarefas, setTarefas] = useState(
        [{
            tarefa: 'React',
            tempo: '02:00:00'
        },
        {
            tarefa: 'JavaScript',
            tempo: '01:00:00'
        }])

    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                setTarefas([...tarefas, { tarefa: 'Rails', tempo: '02:00:00' }])
            }}>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        tarefa={item.tarefa} tempo={item.tempo}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default ListComponent;