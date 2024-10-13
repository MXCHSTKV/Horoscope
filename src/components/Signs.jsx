import axios from 'axios';
import { useState, useEffect } from 'react';
import translate from "translate";
import { useLocation } from 'react-router-dom';

translate.engine = "deepl" 
translate.key = process.env.REACT_APP_DEEPL_KEY

const Signs = () => {
    const [data, setData] = useState('Загрузка...');
    const [ruData, setRuData] = useState('Data not loaded')
    const location = useLocation();
    const {sign, name, ru, date} = location.state

    useEffect(() => {
        const fetchData = async (sign, date) => {
            try {
                const response = await axios.get(`https://pure-server.onrender.com/horoscope?sign=${sign}&date=${date}`);
                setData(response.data);
            } catch (error) {
                console.error('Ошибка запроса', error)
                setData('Ошибка загрузки данных')
            }
        };

        fetchData(sign, date);
    }, [sign]);

    useEffect(()=>{
        const translateData = async () => {
            const translatedData = await translate(data, 'ru')
            setRuData(translatedData)
        }
        translateData()
    }, [data])

    return (
        <div className='sign'>
            <h1>{name}</h1>
            <h3 className='sign_h3'>{ru ? 'Твой гороскоп на сегодня:' : 'Your horoscope for today:'}</h3>
            <p className='sign'>{ru ? ruData : data}</p>
        </div>
    );
};

export default Signs;
