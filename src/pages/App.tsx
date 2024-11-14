/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import Form from '../components/Form';
import ListComponent from '../components/List';
import Timer from '../components/Timer';
import style from './App.module.scss'
import ITarefa from '../types/tarefa'


function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <ListComponent
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Timer />
    </div>
  );
}

export default App;
