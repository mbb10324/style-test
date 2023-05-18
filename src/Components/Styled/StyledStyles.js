import styled, { keyframes } from 'styled-components';

const black = '#181818'
const lightBlack = '#333333'
const white = '#FCFCFC'
const tan = '#907163'
const lightTan = '#AC93A7'
const red = '#D52727'
const lightRed = '#E77272'

export const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: ${black};
    color: ${white};
    font-family: 'PlayfairDisplay-Regular';
`;

export const StyledHeader = styled.h1`
    color: ${red};
    font-family: 'PlayfairDisplay-Bold';
    text-align: center;
    margin-top: 5vw;
    font-size: 5vw;
`;

export const NavButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5vw;
    padding-top: 2vw;
    overflow: hidden;
`;

const allNavButtons = `
    font-family: 'PlayfairDisplay-Bold';
    font-size: 1.2vw;
    color: ${black};
    width: 7vw;
    height: 2vw;
    margin-right: 2vw;
    background-color: ${tan};
    border: 1px solid black;
    border-radius: 3vw;
    cursor: pointer;
    transition: all .5s cubic-bezier(.79, -1, .37, 2);
    overflow: hidden;
    &:hover {
        background-color: ${lightTan};
        transform: scale(1.1);
    };
`;

export const PrevNavButton = styled.button`
    ${allNavButtons}
    margin-right: 2vw;
`;

export const NextNavButton = styled.button`
    ${allNavButtons}
    margin-left: 2vw;
`;

export const DemoLine = styled.div`
    margin: auto;
    width: 80vw;
    height: 3px;
    border-radius: 50%;
    background-color: ${lightTan};
`;

export const FlexContainer = styled.div`
    margin-bottom: 2.5vw;
`;

export const FlexContainerHeader = styled.h2`
    text-align: center;
    font-size: 1.2vw;
    margin-bottom: 2vw;
`;

export const FlexArea = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 2vw;
    height: 15vw;
`;

export const ListArea = styled.div`
    background-color: ${lightRed};
    padding: 1vw;
    border-radius: 3vw;
    overflow: hidden;
    width: 30vw;
`;

export const ListTitle = styled.h3`
    text-align: center;
    font-size: 2.5vw;
    color: ${black};
    margin-bottom: 1vw;
`;

export const ListUL = styled.ul`
    line-height: 1.5rem;
    color: ${black};
    font-family: 'PlayfairDisplay-SemiBold';
    font-size: 1vw;
`;

export const ListLI = styled.li`
    overflow: hidden;
`;

export const GridContainer = styled.div`
    margin-top: 4vw;
    margin-bottom: 5vw;
`;

export const GridContainerTitle = styled.h2`
    text-align: center;
    font-size: 1.2vw;
    margin-bottom: 2vw;
`;

export const GridArea = styled.div`
    display: grid;
    grid-template-columns: 33% 33% 33%;
    align-items: center;
    justify-items: center;
    height: 15vw;
    margin-top: 2vw;
    overflow: hidden;
`;

export const GridAreaIMG = styled.img`
    width: 80%;
    height: 100%;
    border-radius: 3vw;
`;

export const GridButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CleanButton = styled.button`
    font-family: 'PlayfairDisplay-Bold';
    font-size: 1.2vw;
    color: ${black};
    width: 15vw;
    height: 2vw;
    background-color: ${lightRed};
    border: 1px solid black;
    border-radius: 4px;
    cursor: pointer;
    transition: all .2s linear;
    margin-bottom: 1vw;
    overflow: hidden;
    &:hover {
        background-color: ${red};
    }
`;

export const DumbButton = styled.button`
    font-family: 'PlayfairDisplay-Bold';
    font-size: 1.2vw;
    color: ${black};
    width: 8vw;
    height: 8vw;
    background-color: ${tan});
    border: 1px solid black;
    border-radius: 50%;
    cursor: pointer;
    transition: all .2s linear;
    margin-bottom: 1vw;
    transition: all .5s cubic-bezier(.79, -1, .37, 2);
    &:hover {
        background-color: ${red};
        color: ${white};
        transform: scale(1.5);
        box-shadow: 0 0 30px ${red};
    }
`;

export const GridButtonPara = styled.p`
    font-size: 1.1vw;
`;

const ModalAnimation = keyframes`
    0% { opacity: 0 };
    100% { opacity: 1 };
`;

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    background-color: #3333332d;
    animation: ${ModalAnimation} .2s linear;
`;

export const ModalContent = styled.div`
    background-color: ${lightTan};
    border: 2px solid ${lightBlack};
    padding: 2vw;
    width: 25vw;
    border-radius: 2vw;
    overflow: hidden;
    box-shadow: 0 6px 12px ${lightBlack};
    color: ${black};
    text-align: center;
`;

export const ModalContentTitle = styled.h4`
    margin-bottom: 1.5vw;
    font-size: 2vw;
`;

export const ModalFormTitle = styled.h5`
    font-size: 1vw;
`;

export const ModalContentInput = styled.input`
    margin-bottom: 1.5vw;
    width: 20vw;
    height: 2vw;
    background-color: ${lightTan};
    border: 1px solid ${black};
    outline: none;
    text-align: center;
    border-radius: 4px;
    font-size: 1vw;
    &:focus {
        border: 1px solid ${red};
    }
`;

export const ModalContentSelect = styled.select`
    margin-bottom: 2vw;
    width: 20vw;
    height: 2vw;
    background-color: ${lightTan};
    border: 1px solid ${black};
    text-align: center;
    border-radius: 4px;
    font-size: 1vw;
    &:focus {
        border: 1px solid ${red};
    }
`;

export const Form = styled.form``;

export const Option = styled.option``;

