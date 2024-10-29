import Form from '../components/Form';
import ListComponent from '../components/List';
import style from './App.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <ListComponent />
    </div>
  );
}

export default App;
