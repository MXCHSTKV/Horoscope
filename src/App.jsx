import {useEffect, useState} from 'react'
import './App.css'
import Zodiacs from './components/Zodiacs';

const tg = window.Telegram.WebApp
const onClose = () => {
  tg.close()
}


function App() {
  const [lang, setLang] = useState('en')
  useEffect(() => {
    const userLang = tg.initDataUnsafe?.user?.language_code || 'en';
    setLang(userLang);

    tg.ready();
  }, []);

  return (
    <div className="main">
        <button type='button' onClick={onClose}>Close</button>
        <h1>{lang === 'ru' ? 'Здесь про Гороскопы' : 'It`s About Horoscopes'}</h1>
        <Zodiacs/>
    </div>
  );
}

export default App;
