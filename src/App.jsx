import './App.css'
import Zodiacs from './components/Zodiacs';

const tg = window.Telegram.WebApp
const onClose = () => {
  tg.close()
}
const lang = tg.WebAppUser.language_code()

function App() {
  return (
    <div className="main">
        <button type='button' onClick={onClose}>Close</button>
        <h1>{lang == 'ru' ? 'Здесь про Гороскопы' : 'It`s About Horoscopes'}</h1>
        <Zodiacs/>
    </div>
  );
}

export default App;
