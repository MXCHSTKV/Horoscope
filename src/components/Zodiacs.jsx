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

const Zodiacs = (props) => (
    <div className="signs">
        <Link to="/Horoscope" state={{sign: 'aries', name: 'Овен'}}>
        <h3>Овен</h3>
        <Aries className="zodiac_sign"/>
        <p>21 марта - 20&nbsp;апреля</p>
        </Link>

        <Link to="/Horoscope" state={{sign: 'taurus', name: 'Телец'}}>
        <h3>Телец</h3>
        <Taurus className="zodiac_sign"/>
        <p>21 апреля - 20&nbsp;мая</p>
        </Link>

        <Link to="/Horoscope" state={{sign: 'gemini', name: 'Близнецы'}}>
        <h3>Близнецы</h3>
        <Gemini className="zodiac_sign"/>
        <p>21 мая - 21&nbsp;июня</p>
        </Link>

        <Link to="/Horoscope" state={{sign: 'cancer', name: 'Рак'}}>
        <h3>Рак</h3>
        <Cancer className="zodiac_sign"/>
        <p>22 июня - 22&nbsp;июля</p>
        </Link>

        <Link to="/Horoscope" state={{sign: 'leo', name: 'Лев'}}>
        <h3>Лев</h3>
        <Leo className="zodiac_sign"/>
        <p>23 июля - 23&nbsp;августа</p>
        </Link>

        <Link to="/Horoscope" state={{sign: 'virgo', name: 'Дева'}}>
        <h3>Дева</h3>
        <Virgo className="zodiac_sign"/>
        <p>24 августа - 23&nbsp;сентября</p>
        </Link>

        <Link to="/Horoscope" state={{sign: 'libra', name: 'Весы'}}>
        <h3>Весы</h3>
        <Libra className="zodiac_sign"/>
        <p>24 сентября - 23&nbsp;октября</p>
        </Link>

        <Link to="/Horoscope" state={{sign: 'scorpio', name: 'Скорпион'}}>
        <h3>Скорпион</h3>
        <Scorpio className="zodiac_sign"/>
        <p>24 октября - 22&nbsp;ноября</p>
        </Link>

        <Link to="/Horoscope" state={{sign: 'sagittarius', name: 'Стрелец'}}>
        <h3>Стрелец</h3>
        <Sagittarius className="zodiac_sign"/>
        <p>23 ноября - 21&nbsp;декабря</p>
        </Link>

        <Link to="/Horoscope" state={{sign: 'capricorn', name: 'Козерог'}}>
        <h3>Козерог</h3>
        <Capricorn className="zodiac_sign"/>
        <p>22 декабря - 20&nbsp;января</p>
        </Link>

        <Link to="/Horoscope" state={{sign: 'aquarius', name: 'Водолей'}}>
        <h3>Водолей</h3>
        <Aquarius className="zodiac_sign"/>
        <p>21 января - 20&nbsp;февраля</p>
        </Link>

        <Link to="/Horoscope" state={{sign: 'pisces', name: 'Рыбы'}}>
        <h3>Рыбы</h3>
        <Pisces className="zodiac_sign"/>
        <p>21 февраля - 20&nbsp;марта</p>
        </Link>
    </div>
  )

export default Zodiacs