import Signs from '../components/Signs';

const Horoscope = (props) => (
    <div className="horoscope">
        <Signs name={props.name} sign={props.sign} className='sign'/>
    </div>
)

export default Horoscope