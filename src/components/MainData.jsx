import React from 'react';
import styled from 'styled-components';
import { getDate, getTime } from '../utils/getDate';
import { Title, SubTitle, Text, TextArea } from './ui/Text';
import { IoWaterOutline } from 'react-icons/io5'
import { WiBarometer } from 'react-icons/wi'

const Wrapper = styled.section`
    @media (max-width: 600px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;

        /* & > * {
            display: 'flex';
            justify-content: center;
            box-sizing: border-box;
        } */
    }  
`;

const MainData = ({city, humidity, pressure, sunrise, sunset}) => {

    return (

        <Wrapper>
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
        </Wrapper>
    );
}

export default MainData;
