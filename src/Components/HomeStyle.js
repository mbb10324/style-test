import styled from 'styled-components';

const black = '#181818'
const white = '#FCFCFC'
const lightTan = '#AC93A7'
const red = '#D52727'

export const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: ${black};
    color: ${white};
    font-family: 'PlayfairDisplay-Regular';
`;

export const HomeHeader = styled.h1`
    color: ${red};
    font-family: 'PlayfairDisplay-Bold';
    text-align: center;
    margin-top: 5vw;
    font-size: 3vw;
`;

export const HomeLine = styled.div`
    margin: auto;
    width: 80vw;
    height: 3px;
    border-radius: 50%;
    background-color: ${lightTan};
`;

export const MyChoicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 2vw;
    margin-bottom: 2vw;
`;

export const MyChoiceHeader = styled.h2`
    color: ${red};
    font-size: 2vw;
    text-decoration: underline;
`;

export const MyChoices = styled.h3`
    font-size: 1vw;
`;

export const HomeGrid = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%
`;
