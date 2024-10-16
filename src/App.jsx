import {useEffect, useState} from 'react'
import './App.css'
import Zodiacs from './components/Zodiacs';

const tg = window.Telegram.WebApp

function App() {
  const [lang, setLang] = useState(sessionStorage.getItem('selectedLanguage') || 'ru')
  const changeLanguage = (newLang) => {
    sessionStorage.setItem('selectedLanguage', newLang)
    setLang(newLang)
  }

  useEffect(() => {
    const userLang = tg.initDataUnsafe?.user?.language_code || 'ru';
    setLang(sessionStorage.getItem('selectedLanguage') || userLang);

    tg.ready()
  }, [])

  return (
    <div className="main">
      <div className="language-switcher">
        <button type='button' onClick={() => changeLanguage('ru')}>RU</button>
        <button type='button' onClick={() => changeLanguage('en')}>EN</button>
      </div>
      <h1>{lang === 'ru' ? 'Выбери свой знак' : 'Choose your sign'}</h1>
      <Zodiacs lang={lang}/>
    </div>
  );
}

export default App;
