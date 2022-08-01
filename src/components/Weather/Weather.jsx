import React  from 'react';
import styled from 'styled-components';
import { useFetching } from '../../hooks/useFetching';
import { getDate } from '../../utils/getDate';
import { IoThermometerOutline, IoWaterOutline } from 'react-icons/io5'
import { WiBarometer, WiSunrise } from 'react-icons/wi' 
import Temperature from '../Temperature/Temperature';
import MainData from '../MainData';
import { Wrapper } from './styled';

//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

//http://openweathermap.org/img/wn/10d@2x.png



const Weather = ({location}) => {

    const [{data, isLoading, error}] = useFetching(location);

    return (
        !isLoading && !error.status &&
        // <div style={{width: '575px', minWidth: '575px', background: 'linear-gradient(45deg, #11d632, #0febd1)', borderRadius: '15px', padding: '12px 24px', display: 'flex', justifyContent: 'space-between'}}>
        <Wrapper>
            <MainData 
                city={data?.name}
                humidity={data.main?.humidity}
                pressure={data.main?.pressure}
                sunrise={data.sys?.sunrise}
                sunset={data.sys?.sunset}
            />
            <Temperature 
                src={`http://openweathermap.org/img/wn/${data.weather[0]?.icon}@2x.png`}
                temp={data.main?.temp} 
                feels_like={data.main?.feels_like}
                temp_max={data.main?.temp_max}
                temp_min={data.main?.temp_min}
                description={data.weather[0]?.description}
            />
        </Wrapper>
    );
}

export default Weather;
