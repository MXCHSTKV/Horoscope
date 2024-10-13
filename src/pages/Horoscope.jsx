import Signs from '../components/Signs';
import TgBackButton from '../components/TgBackButton';


const Horoscope = (props) => (
    <div className="horoscope">
        <TgBackButton/>
        <Signs name={props.name} sign={props.sign} ru={props.ru} date={props.date} className='sign'/>
    </div>
)

export default Horoscope