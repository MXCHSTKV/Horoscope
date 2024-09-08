import './App.css'
import Zodiacs from './components/Zodiacs';

const tg = window.Telegram.WebApp
const onClose = () => {
  tg.close()
}

function App() {
  return (
    <div className="main">
        <button type='button' onClick={onClose}>Close</button>
        <h1>Здесь про Гороскопы</h1>
        <Zodiacs/>
    </div>
  );
}

export default App;
