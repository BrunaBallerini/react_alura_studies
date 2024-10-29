import style from './List.module.scss'

function ListComponent() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'JavaScript',
        tempo: '01:00:00'
    }]
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li className={style.item} key={index}>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default ListComponent;