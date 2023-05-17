import { useNavigate } from "react-router-dom";
import Ferrel from '../../images/Ferrel.gif'
import Mountain from '../../images/Mountain.jpg'
import './Basic.css'
import { useState } from "react";

export default function Basic() {
    const [show, setShow] = useState(false)
    const toggleModal = () => { setShow(!show) }

    const navigate = useNavigate()
    const goNext = () => { navigate('/Mui') }
    const goPrev = () => { navigate('/Rebass') }

    return (
        <div className="basic-container">

            <h1>This is a Basic CSS example</h1>
            <div className="nav-buttons">
                <button className="prev-button" onClick={goPrev}>Go Prev</button>
                <button className="next-button" onClick={goNext}>Go Next</button>
            </div>

            <div className="flex-demo-container">
                <h2>This area demonstrates the FLEX property</h2>
                <div className="demo-line"></div>
                <div className="flex-demo">

                    <div className="advantages">
                        <h3>Advantages:</h3>
                        <ul>
                            <li>-One rule apply to many elements.</li>
                            <li>-Well documented, deep history with endless posibilites.</li>
                            <li>-Responsive capabilities.</li>
                        </ul>
                    </div>

                    <div className="disadvantages">
                        <h3>Disadvantages:</h3>
                        <ul>
                            <li>-Browser support.</li>
                            <li>-Dead code.</li>
                            <li>-Control, change one line could break many things.</li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="grid-demo-container">
                <h2>This area demonstrates the GRID property</h2>
                <div className="demo-line"></div>
                <div className="grid-demo">

                    <img src={Ferrel} alt='' />
                    <div className="button-demo-container">
                        <button className="clean-button">Clean Button</button>
                        <button className="dumb-button" onClick={toggleModal}>Big Dumb Button</button>
                        <p>&uarr; Click this one to show you a modal though &uarr;</p>
                    </div>
                    <img src={Mountain} alt='' />

                </div>
            </div>

            {show &&
                <div className="modal">
                    <div className="modal-content">
                        <h4>This is a modal</h4>

                        <form>
                            <h5>Heres a form:</h5>
                            <input></input>
                            <h5>Idk type your email:</h5>
                            <input></input>
                            <h5>Select field for fun:</h5>
                            <select>
                                <option>option 1</option>
                                <option>option 2</option>
                                <option>option 3</option>
                            </select>
                            <button className="clean-button" onClick={toggleModal}>Close</button>
                        </form>

                    </div>
                </div>
            }
        </div>
    )
}