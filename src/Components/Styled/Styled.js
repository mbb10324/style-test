import { useNavigate } from "react-router-dom";
import Ferrel from '../../images/Ferrel.gif';
import Mountain from '../../images/Mountain.jpg';
import { useState } from "react";
import * as S from "./StyledStyles";

export default function Styled() {
    const [show, setShow] = useState(false)
    const toggleModal = () => { setShow(!show) }
    
    const navigate = useNavigate()
    const goNext = () => { navigate('/Rebass') }
    const goPrev = () => { navigate('/Tailwind') }

    return (
        <S.StyledContainer>
            
            <S.StyledHeader>This is a Styled Components example</S.StyledHeader>
            <S.NavButtons>
                <S.PrevNavButton onClick={goPrev}>Go Prev</S.PrevNavButton>
                <S.NextNavButton onClick={goNext}>Go Next</S.NextNavButton>
            </S.NavButtons>

            <S.FlexContainer>
                <S.FlexContainerHeader>This area demonstrates the FLEX property</S.FlexContainerHeader>
                <S.DemoLine />
                <S.FlexArea>

                    <S.ListArea>
                        <S.ListTitle>Advantages:</S.ListTitle>
                        <S.ListUL>
                            <S.ListLI>-One rule apply to many elements.</S.ListLI>
                            <S.ListLI>-Well documented, deep history with endless posibilites.</S.ListLI>
                            <S.ListLI>-Responsive capabilities.</S.ListLI>
                        </S.ListUL>
                    </S.ListArea>

                    <S.ListArea>
                        <S.ListTitle>Disadvantages:</S.ListTitle>
                        <S.ListUL>
                            <S.ListLI>-Browser support.</S.ListLI>
                            <S.ListLI>-Dead code.</S.ListLI>
                            <S.ListLI>-Control, change one line could break many things.</S.ListLI>
                        </S.ListUL>
                    </S.ListArea>

                </S.FlexArea>
            </S.FlexContainer>

            <S.GridContainer>
                <S.GridContainerTitle>This area demonstrates the GRID property</S.GridContainerTitle>
                <S.DemoLine />
                <S.GridArea>

                    <S.GridAreaIMG src={Ferrel} alt='' />
                    <S.GridButtonContainer>
                        <S.CleanButton className="clean-button">Clean Button</S.CleanButton>
                        <S.DumbButton className="dumb-button" onClick={toggleModal}>Big Dumb Button</S.DumbButton>
                        <S.GridButtonPara>&uarr; Click this one to show you a modal though &uarr;</S.GridButtonPara>
                    </S.GridButtonContainer>
                    <S.GridAreaIMG src={Mountain} alt='' />

                </S.GridArea>
            </S.GridContainer>

            {show &&
                <S.Modal>
                    <S.ModalContent>
                        <S.ModalContentTitle>This is a modal</S.ModalContentTitle>

                        <S.Form>
                            <S.ModalFormTitle>Heres a form:</S.ModalFormTitle>
                            <S.ModalContentInput />
                            <S.ModalFormTitle>Idk type your email:</S.ModalFormTitle>
                            <S.ModalContentInput />
                            <S.ModalFormTitle>Select field for fun:</S.ModalFormTitle>
                            <S.ModalContentSelect>
                                <S.Option>option 1</S.Option>
                                <S.Option>option 2</S.Option>
                                <S.Option>option 3</S.Option>
                            </S.ModalContentSelect>
                            <S.CleanButton onClick={toggleModal}>Close</S.CleanButton>
                        </S.Form>

                    </S.ModalContent>
                </S.Modal>
            }
        </S.StyledContainer>
    )
}