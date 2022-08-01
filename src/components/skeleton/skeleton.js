import styled, { keyframes } from "styled-components";

const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

export const SkeletonWrapper = styled.section`
    width: ${({ width }) => width || null};
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    gap: 16px;
    position: relative;
    overflow: hidden;

    @media (max-width: 359px) {
        width: 100%
    }
    /* & > * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } */
`;

export const SkeletonTitle = styled.h1`
    height: 48px;
    width: 100%;
    margin: 0;
    border-radius: 5px;
	background: linear-gradient(-45deg, #ddd, rgba(255, 255, 255, .3) 30%, #ddd);
	background-size: 400% 400%;
	animation: ${gradient} 5s ease infinite;
`;

export const SkeletonSubtitle = styled.h3`
    height: 32px;
    width: 100%;
    /* margin: 16px 0; */
    border-radius: 5px;
	background: linear-gradient(-45deg, #ddd, rgba(255, 255, 255, .3) 30%, #ddd);
	background-size: 400% 400%;
	animation: ${gradient} 5s ease infinite;
`;

export const SkeletonText = styled.p`
    height: 18px;
    width: 100%;
    background-color: #ddd;
    margin: 0;
    border-radius: 3px;
	background: linear-gradient(-45deg, #ddd, rgba(255, 255, 255, .3) 30%, #ddd);
	background-size: 400% 400%;
	animation: ${gradient} 2.5s ease infinite;
`;

export const SkeletonIcon = styled.div`
    height: 82px;
    width: 82px;
    background-color: #ddd;
    border-radius: 50%;
    background: linear-gradient(-45deg, #ddd, rgba(255, 255, 255, .3) 30%, #ddd);
	background-size: 400% 400%;
	animation: ${gradient} 2.5s ease infinite;
`;