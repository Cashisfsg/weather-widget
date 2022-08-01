import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    width: max-content;
    /* align-items: center; */
    place-items: center;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: repeat(5, minmax(auto, max-content));
    grid-template-areas: 
        "icon icon"
        "temp maxtemp"
        "temp mintemp"
        "feelslike feelslike"
        "description description";

    grid-row-gap: 5px;

    & > * {
        padding: 0;
        margin: 0;
    }
`;

export const Icon = styled.img`
    grid-area: icon;
`;

export const Temp = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: temp; 
    font-size: 32px;
    font-weight: 700;
`;

export const Text = styled.p`
    grid-area: ${({area}) => area || null};
    font-size: 15px;
    font-weight: 400;  
`;