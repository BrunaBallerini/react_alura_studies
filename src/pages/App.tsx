import Form from '../components/Form';
import ListComponent from '../components/List';
import Timer from '../components/Timer';
import style from './App.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <ListComponent />
      <Timer />
    </div>
  );
}

export default App;
