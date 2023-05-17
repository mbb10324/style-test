import { useNavigate } from "react-router-dom";

export default function Tailwind() {
    const navigate = useNavigate()
    const goNext = () => {navigate('/Styled')}
    const goPrev = () => {navigate('/Mui')}

    return (
        <div>
            <h1>This is a Tailwind example</h1>
            <button onClick={goPrev}>Go Prev</button>
            <button onClick={goNext}>Go Next</button>
            <div>
                <h2>This area demonstrates the FLEX property</h2>
            </div>
            <div>
                <h2>This area demonstrates the GRID property</h2>
            </div>
        </div>
    )
}