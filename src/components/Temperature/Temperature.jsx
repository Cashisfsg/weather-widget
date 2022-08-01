import React from 'react';
import { Wrapper, Icon, Temp, Text } from './styled';
import { IoThermometerOutline } from 'react-icons/io5'

const Temperature = ({src, temp, feels_like, temp_max, temp_min, description}) => {
    return (
        <Wrapper>
            <Temp><IoThermometerOutline />{`${temp.toFixed(0)} °C`}</Temp>
            <Icon src={src} alt=''/>
            <Text area={'maxtemp'}>{`${temp_max.toFixed(0)} °C`}</Text>
            <Text area={'mintemp'}>{`${temp_min.toFixed(0)} °C`}</Text>
            <Text area={'feelslike'}>{`Ощущается как: ${feels_like.toFixed(0)} °C`}</Text>
            <Text area={'description'}>{description}</Text>
        </Wrapper>
    );
}

export default Temperature;
