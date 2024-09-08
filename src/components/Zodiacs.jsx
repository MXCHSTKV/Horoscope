import { Link } from 'react-router-dom';

import Aries from '../svg/aries-svgrepo-com.jsx'
import Aquarius from '../svg/aquarius-svgrepo-com.jsx'
import Cancer from '../svg/cancer-svgrepo-com.jsx'
import Capricorn from '../svg/capricorn-svgrepo-com.jsx';
import Taurus from '../svg/taurus-svgrepo-com.jsx';
import Gemini from '../svg/gemini-svgrepo-com.jsx';
import Leo from '../svg/leo-svgrepo-com.jsx';
import Libra from '../svg/libra-svgrepo-com.jsx';
import Scorpio from '../svg/scorpio-svgrepo-com.jsx';
import Pisces from '../svg/pisces-svgrepo-com.jsx';
import Virgo from '../svg/virgo-svgrepo-com.jsx';
import Sagittarius from '../svg/sagittarius-svgrepo-com.jsx';

const Zodiacs = (props) => {
  const ru = props.lang === 'ru'

  return (
    <div className="signs">
        <Link to="/Horoscope" className="zodiac_box" state={{ru: ru, sign: 'aries', name: ru ? 'Овен' : 'Aries'}}>
        <h3 className='zodiac_box_text'>{ru ? 'Овен' : 'Aries'}</h3>
        <Aries className="zodiac_sign"/>
        <p className='zodiac_box_text'>{ru ? '21 марта - 20\u00A0апреля' : 'March 21 - April\u00A020'}</p>
        </Link>

        <Link to="/Horoscope" className="zodiac_box" state={{ru: ru, sign: 'taurus', name: ru ? 'Телец' : 'Taurus'}}>
        <h3>{ ru ? 'Телец' : 'Taurus'}</h3>
        <Taurus className="zodiac_sign"/>
        <p>{ru? '21 апреля - 20\u00A0мая' : 'April 21 - May\u00A020'}</p>
        </Link>

        <Link to="/Horoscope" className="zodiac_box" state={{ru: ru, sign: 'gemini', name: ru ? 'Близнецы' : 'Gemini'}}>
        <h3>{ru ? 'Близнецы' : 'Gemini'}</h3>
        <Gemini className="zodiac_sign"/>
        <p>{ru ? '21 мая - 21\u00A0июня' : 'May 21 - June\u00A021'}</p>
        </Link>

        <Link to="/Horoscope" className="zodiac_box" state={{ru: ru, sign: 'cancer', name: ru ? 'Рак' : 'Cancer'}}>
        <h3>{ru ? 'Рак' : 'Cancer'}</h3>
        <Cancer className="zodiac_sign"/>
        <p>{ru ? '22 июня - 22\u00A0июля' : 'June 22 - Jule\u00A022'}</p>
        </Link>

        <Link to="/Horoscope" className="zodiac_box" state={{ru: ru, sign: 'leo', name: ru ? 'Лев' : 'Leo'}}>
        <h3>{ru ? 'Лев' : 'Leo'}</h3>
        <Leo className="zodiac_sign"/>
        <p>{ru ? '23 июля - 23\u00A0августа' : 'Jule 23 - August\u00A023'}</p>
        </Link>

        <Link to="/Horoscope" className="zodiac_box" state={{ru: ru, sign: 'virgo', name: ru ? 'Дева' : 'Virgo'}}>
        <h3>{ru ? 'Дева' : 'Virgo'}</h3>
        <Virgo className="zodiac_sign"/>
        <p>{ru ? '24 августа - 23\u00A0сентября' : 'August 24 - September\u00A023'}</p>
        </Link>

        <Link to="/Horoscope" className="zodiac_box" state={{ru: ru, sign: 'libra', name: ru ? 'Весы' : 'Libra'}}>
        <h3>{ru ? 'Весы' : 'Libra'}</h3>
        <Libra className="zodiac_sign"/>
        <p>{ru ? '24 сентября - 23\u00A0октября' : 'September 24 - October\u00A023'}</p>
        </Link>

        <Link to="/Horoscope" className="zodiac_box" state={{ru: ru, sign: 'scorpio', name: ru ? 'Скорпион' : 'Scorpio'}}>
        <h3>{ru ? 'Скорпион' : 'Scorpio'}</h3>
        <Scorpio className="zodiac_sign"/>
        <p>{ru ? '24 октября - 22\u00A0ноября' : 'October 24 - November\u00A022'}</p>
        </Link>

        <Link to="/Horoscope" className="zodiac_box" state={{ru: ru, sign: 'sagittarius', name: ru ? 'Стрелец' : 'Sagittarius'}}>
        <h3>{ru ? 'Стрелец' : 'Sagittarius'}</h3>
        <Sagittarius className="zodiac_sign"/>
        <p>{ru ? '23 ноября - 21\u00A0декабря' : 'November 23 - December\u00A021'}</p>
        </Link>

        <Link to="/Horoscope" className="zodiac_box" state={{ru: ru, sign: 'capricorn', name: ru ? 'Козерог' : 'Capricorn'}}>
        <h3>{ru ? 'Козерог' : 'Capricorn'}</h3>
        <Capricorn className="zodiac_sign"/>
        <p>{ru ? '22 декабря - 20\u00A0января' : 'December 22 - January\u00A020'}</p>
        </Link>

        <Link to="/Horoscope" className="zodiac_box" state={{ru: ru, sign: 'aquarius', name: ru ? 'Водолей' : 'Aquarius'}}>
        <h3>{ru ? 'Водолей' : 'Aquarius'}</h3>
        <Aquarius className="zodiac_sign"/>
        <p>{ru ? '21 января - 20\u00A0февраля' : 'January 21 - February\u00A020'}</p>
        </Link>

        <Link to="/Horoscope" className="zodiac_box" state={{ru: ru, sign: 'pisces', name: ru ? 'Рыбы' : 'Pisces'}}>
        <h3>{ru ? 'Рыбы' : 'Pisces'}</h3>
        <Pisces className="zodiac_sign"/>
        <p>{ru ? '21 февраля - 20\u00A0марта' : 'February 21 - March\u00A020'}</p>
        </Link>
    </div>
  )
}

export default Zodiacs