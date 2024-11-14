import { useState } from 'react';
import Form from '../components/Form';
import ListComponent from '../components/List';
import Timer from '../components/Timer';
import style from './App.module.scss'
import ITarefa from '../types/tarefa'


function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <ListComponent tarefas={tarefas} />
      <Timer />
    </div>
  );
}

export default App;
