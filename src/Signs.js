import axios from 'axios';
import { useState, useEffect } from 'react';
import translate from "translate";

translate.engine = "deepl" 
translate.key = process.env.REACT_APP_DEEPL_KEY

const Signs = (props) => {
    const [data, setData] = useState('Здесь пусто');
    const [ruData, setRuData] = useState('Data not loaded')

    useEffect(() => {
        const fetchData = async (sign) => {
            try {
                const response = await axios.get(`https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sign}&day=TODAY`);
                setData(response.data.data.horoscope_data);
            } catch (error) {
                console.error('Ошибка запроса', error)
                setData('Ошибка загрузки данных')
            }
        };

        fetchData(props.sign);
    }, [props.sign]);

    useEffect(()=>{
        const translateData = async () => {
            const translatedData = await translate(data, 'ru')
            setRuData(translatedData)
        }
        translateData()
    }, [data])

    return (
        <div>
            <h1>{props.name}</h1>
            <p>{ruData ? ruData : data}</p>
        </div>
    );
};

export default Signs;
