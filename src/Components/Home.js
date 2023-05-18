import { useNavigate } from "react-router-dom";
import * as H from './HomeStyle'
import * as S from './Styled/StyledStyles'

export default function Home() {
    const navigate = useNavigate()
    const goNext = () => { navigate('/Basic') }
    const goPrev = () => { navigate('/Styled') }

    return (
        <H.HomeContainer>

            <H.HomeHeader>This project was created to demonstrate the differences between different architecture choices when styling a React application.</H.HomeHeader>
            <S.NavButtons className="nav-buttons">
                <S.PrevNavButton className="prev-button" onClick={goPrev}>Go Prev</S.PrevNavButton>
                <S.NextNavButton className="next-button" onClick={goNext}>Go Next</S.NextNavButton>
            </S.NavButtons>

            <S.DemoLine />

            <H.MyChoicesContainer>
                <H.MyChoices>The 4 main choices presented are tailwind, basic/vanilla css, styled-components,</H.MyChoices>
                <H.MyChoices>and mui. Honorable mentions that were tested and ruled out include Ant Design, Rebass, Chakra UI, and Semantic UI.</H.MyChoices>
            </H.MyChoicesContainer>

            <H.MyChoicesContainer>
                <H.MyChoiceHeader>This next section procedurally scores each option from 1 to 5</H.MyChoiceHeader>
            </H.MyChoicesContainer>

            <S.DemoLine />

            <H.HomeGrid>

                <H.MyChoicesContainer>
                    <H.MyChoiceHeader>Documentation:</H.MyChoiceHeader>
                    <H.MyChoices>1. Tailwind (4.2)</H.MyChoices>
                    <H.MyChoices>2. Basic CSS (4.0)</H.MyChoices>
                    <H.MyChoices>3. Styled-Components (3.9)</H.MyChoices>
                    <H.MyChoices>4. Mui (3.0)</H.MyChoices>
                </H.MyChoicesContainer>

                <H.MyChoicesContainer>
                    <H.MyChoiceHeader>Community:</H.MyChoiceHeader>
                    <H.MyChoices>1. Basic CSS (4.7)</H.MyChoices>
                    <H.MyChoices>2. Styled-Components (4.6)</H.MyChoices>
                    <H.MyChoices>3. Tailwind (4.3)</H.MyChoices>
                    <H.MyChoices>4. Mui (4.0)</H.MyChoices>
                </H.MyChoicesContainer>

                <H.MyChoicesContainer>
                    <H.MyChoiceHeader>Code Organization:</H.MyChoiceHeader>
                    <H.MyChoices>1. Styled-Components (4.0)</H.MyChoices>
                    <H.MyChoices>2. Basic CSS (3.0)</H.MyChoices>
                    <H.MyChoices>3. Mui (2.9)</H.MyChoices>
                    <H.MyChoices>4. Tailwind (2.0)</H.MyChoices>
                </H.MyChoicesContainer>

                <H.MyChoicesContainer>
                    <H.MyChoiceHeader>Learning-Curve:</H.MyChoiceHeader>
                    <H.MyChoices>1. Basic CSS (4.6)</H.MyChoices>
                    <H.MyChoices>2. Styled-Components (4.4)</H.MyChoices>
                    <H.MyChoices>3. Mui (3.8)</H.MyChoices>
                    <H.MyChoices>4. Tailwind (3.5)</H.MyChoices>
                </H.MyChoicesContainer>

                <H.MyChoicesContainer>
                    <H.MyChoiceHeader>Ease-of-Use:</H.MyChoiceHeader>
                    <H.MyChoices>1. Tailwind (4.5)</H.MyChoices>
                    <H.MyChoices>2. Basic CSS (4.3)</H.MyChoices>
                    <H.MyChoices>3. Styled-Components (4.1)</H.MyChoices>
                    <H.MyChoices>4. Mui (3.5)</H.MyChoices>
                </H.MyChoicesContainer>

                <H.MyChoicesContainer>
                    <H.MyChoiceHeader>Customizabiliy:</H.MyChoiceHeader>
                    <H.MyChoices>1. Basic CSS (4.8)</H.MyChoices>
                    <H.MyChoices>2. Styled-Components (4.6)</H.MyChoices>
                    <H.MyChoices>3. Tailwind (4.0)</H.MyChoices>
                    <H.MyChoices>4. Mui (1.5)</H.MyChoices>
                </H.MyChoicesContainer>

                <H.MyChoicesContainer>
                    <H.MyChoiceHeader>Compile Cost:</H.MyChoiceHeader>
                    <H.MyChoices>1. [js = 54.53 kb] [css = 1.48 kb] Basic CSS (4.5)</H.MyChoices>
                    <H.MyChoices>2. [js = 68.86 kb] [css = 0.41 kb] Styled-Components (4.3)</H.MyChoices>
                    <H.MyChoices>3. [js = 55.1 kb] [css = 3.05 kb] Tailwind (4.1)</H.MyChoices>
                    <H.MyChoices>4. [js = 110.38 kb] [css = 0.41 kb] Mui (0.5)</H.MyChoices>
                </H.MyChoicesContainer>

                <H.MyChoicesContainer>
                    <H.MyChoiceHeader>Overall:</H.MyChoiceHeader>
                    <H.MyChoices>1. Styled-Components (4.2)</H.MyChoices>
                    <H.MyChoices>1. Basic CSS (4.2)</H.MyChoices>
                    <H.MyChoices>3. Tailwind (3.8)</H.MyChoices>
                    <H.MyChoices>4. Mui (2.7)</H.MyChoices>
                </H.MyChoicesContainer>

            </H.HomeGrid>

            <S.DemoLine />

            <H.MyChoicesContainer>
                <H.MyChoiceHeader>My Vote:</H.MyChoiceHeader>
                <H.MyChoices>1. Styled-Components (w/ bootstrap, dt library)</H.MyChoices>
                <H.MyChoices>2. Basic CSS (w/ bootstrap, dt library, purgeCss, and postCss)</H.MyChoices>
                <H.MyChoices>3. Tailwind (w/ basic css for complex elements, dt library)</H.MyChoices>
                <H.MyChoices>4. Mui</H.MyChoices>
            </H.MyChoicesContainer>

            <S.DemoLine />

            <H.MyChoicesContainer>
                <H.MyChoiceHeader>Why:</H.MyChoiceHeader>
                <H.MyChoices>Mui made it on to this list because it is the most broadly</H.MyChoices>
                <H.MyChoices>utilized library for css. Most UI librarys are very opinionated,</H.MyChoices>
                <H.MyChoices>and there is no difference when it comes to MUI, due to slow</H.MyChoices>
                <H.MyChoices>compile times, lack of customization capabilites, and poor</H.MyChoices>
                <H.MyChoices>documentation it falls last on this list. Next is Tailwind,</H.MyChoices>
                <H.MyChoices>it is a great tool that can improve speed and efficiency</H.MyChoices>
                <H.MyChoices>when developing. Although; due to the very nature of Tailwind</H.MyChoices>
                <H.MyChoices>riding on the back of inline html styling, it causes</H.MyChoices>
                <H.MyChoices>difficult to read, and messy code. It also lacks in customization</H.MyChoices>
                <H.MyChoices>capabilites. Basic CSS is the root of styling, it has a rich</H.MyChoices>
                <H.MyChoices>community, and history of use for many years. There are endless</H.MyChoices>
                <H.MyChoices>possibilities when it comes to css. Arguably vanilla CSS gives</H.MyChoices>
                <H.MyChoices>you all you will need, and some. Styled-Components rides on the</H.MyChoices>
                <H.MyChoices>back of basic css, but it gives you a very powerful and unique</H.MyChoices>
                <H.MyChoices>capability to incorporate your styling in JS/TS and ultimately</H.MyChoices>
                <H.MyChoices>create custom reusable components that integrate beautifully with react.</H.MyChoices>
                <H.MyChoices>For those reasons styled-components is my choice for styling a</H.MyChoices>
                <H.MyChoices>react application.</H.MyChoices>
            </H.MyChoicesContainer>



        </H.HomeContainer>
    )
}