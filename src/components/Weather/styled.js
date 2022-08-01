import styled from "styled-components";

export const Wrapper = styled.div`

    display: flex;
    justify-content: space-between;
    width: 575px;
    padding: 12px 24px;
    /* min-width: 575px; */
    background: linear-gradient(45deg, #11d632, #0febd1);
    border-radius: 15px;
    box-sizing: border-box;

    @media (max-width: 600px) {
        flex-direction: column;
        width: 100%;
        align-items: center;
        box-sizing: border-box;
    }
`;