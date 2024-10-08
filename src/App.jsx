import {useEffect, useState} from 'react'
import './App.css'
import Zodiacs from './components/Zodiacs';

const tg = window.Telegram.WebApp

function App() {
  const [lang, setLang] = useState('en')
  useEffect(() => {
    const userLang = tg.initDataUnsafe?.user?.language_code || 'en';
    setLang(userLang);

    tg.ready();
  }, []);

  return (
    <div className="main">
      <div className="language-switcher">
        <button type='button' onClick={()=>setLang('ru')}>RU</button>
        <button type='button' onClick={()=>setLang('en')}>EN</button>
      </div>
      <h1>{lang === 'ru' ? 'Здесь про Гороскопы' : 'It`s About Horoscopes'}</h1>
      <Zodiacs lang={lang}/>
    </div>
  );
}

export default App;
