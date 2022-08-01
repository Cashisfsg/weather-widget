import React from 'react';
import { getDate, getTime } from '../utils/getDate';
import { Title, SubTitle, Text, TextArea } from './ui/Text';
import { IoWaterOutline } from 'react-icons/io5'
import { WiBarometer, WiHumidity} from 'react-icons/wi'

const MainData = ({city, humidity, pressure, sunrise, sunset}) => {

    return (

        <div>
            <Title>{city}</Title>
            <SubTitle>{getTime() || ''}</SubTitle>
            <TextArea>
                <Text>{getDate() || ''}</Text>
            </TextArea>
            <TextArea>
                <Text>
                    <IoWaterOutline /> {`${humidity}%`}
                </Text>
                <Text>
                    <WiBarometer /> {`${pressure} hPa`}
                </Text>
            </TextArea>
            <TextArea>
                <Text>{`Восход: ${getTime(sunrise)}` || ''}</Text>
                <Text>{`Закат: ${getTime(sunset)}`}</Text>
            </TextArea>
        </div>
    );
}

export default MainData;
