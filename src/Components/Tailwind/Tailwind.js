import { useNavigate } from "react-router-dom";
import Mountain from '../../images/Mountain.jpg'
import Ferrel from '../../images/Ferrel.gif'
import { useState } from "react";
import './Tailwind.css'

export default function Tailwind() {
    const [show, setShow] = useState(false)
    const toggleModal = () => { setShow(!show) }

    const navigate = useNavigate()
    const goNext = () => { navigate('/Styled') }
    const goPrev = () => { navigate('/Mui') }

    return (
        <div className="w-full h-full min-h-screen bg-[#181818] text-[#FCFCFC] font-pfd-regular">

            <h1 className="text-[#D52727] font-pfd-bold text-center mt-[5vw] text-[6vw]">This is a Tailwind example</h1>
            <div className="flex justify-center items-center h-[5vw] pt-[2vw] overflow-hidden">
                <button className="font-pfd-bold text-[1.2vw] text-[#181818] w-[7vw] h-[2vw] mr-[2vw] bg-[#907163] border-[1px] border-[#181818] rounded-[3vw] cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.79,-1.00,0.37,2.00)] overflow-hidden hover:bg-[#AC93A7] hover:scale-125" onClick={goPrev}>Go Prev</button>
                <button className="font-pfd-bold text-[1.2vw] text-[#181818] w-[7vw] h-[2vw] ml-[2vw] bg-[#907163] border-[1px] border-[#181818] rounded-[3vw] cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.79,-1.00,0.37,2.00)] overflow-hidden hover:bg-[#AC93A7] hover:scale-125" onClick={goNext}>Go Next</button>
            </div>

            <div className="mb-[2.5vw]">
                <h2 className="text-center text-[1.2vw] mb-[2vw]">This area demonstrates the FLEX property</h2>
                <div className="m-auto w-[80vw] h-[3px] rounded-[50%] bg-slate-500"></div>
                <div className="flex justify-around mt-[2vw] h-[15vw]">

                    <div className="bg-[#E77272] p-[1vw] w-[30vw] rounded-[3vw] overflow-hidden">
                        <h3 className="text-center text-[2.5vw] text-[#181818] mb-[1vw]">Advantages:</h3>
                        <ul className="leading-6 text-[#181818] mb-[1vw]">
                            <li className="overflow-hidden">-Fast efficient code writing.</li>
                            <li className="overflow-hidden">-Quick compile times.</li>
                            <li className="overflow-hidden">-Impressive support and docs</li>
                        </ul>
                    </div>

                    <div className="bg-[#E77272] p-[1vw] w-[30vw] rounded-[3vw] overflow-hidden">
                        <h3 className="text-center text-[2.5vw] text-[#181818] mb-[1vw]">Disadvantages:</h3>
                        <ul className="leading-6 text-[#181818] mb-[1vw]">
                            <li className="overflow-hidden">-Messy code.</li>
                            <li className="overflow-hidden">-Unique 'language'.</li>
                            <li className="overflow-hidden">-Customizability.</li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="mt-[4vw] mb-[5vw]">
                <h2 className="text-center text-[1.2vw] mb-[2vw]">This area demonstrates the GRID property</h2>
                <div className="m-auto w-[80vw] h-[3px] rounded-[50%] bg-slate-500"></div>
                <div className="grid grid-cols-3 items-center justify-items-center h-[15vw] mt-[2vw] overflow-hidden ml-[2vw] mr-[2vw]">

                    <img className="w-[80%] h-full rounded-[3vw]" src={Ferrel} alt='' />
                    <div className="flex flex-col items-center">
                        <button className="font-pfd-bold text-[1.2vw] text-[#181818] w-[15vw] h-[2vw] bg-[#E77272] border-[1px] border-[#181818] rounded-[4px] transition-all duration-200 ease-linear mb-[1vw] overflow-hidden hover:bg-[#D52727]">Clean Button</button>
                        <button className="font-pfd-bold text-[1.2vw] text-[#181818] w-[8vw] h-[8vw] bg-[#907163] border-[1px] border-[#181818] rounded-[50%] transition-all duration-500 ease-[cubic-bezier(0.79,-1.00,0.37,2.00)] mb-[1vw] hover:bg-[#D52727] hover:text-[#FCFCFC] hover:scale-[1.5] hover:shadow-[0_0_30px_#D52727]" onClick={toggleModal}>Big Dumb Button</button>
                        <p>&uarr; Click this one to show you a modal though &uarr;</p>
                    </div>
                    <img className="w-[80%] h-full rounded-[3vw]" src={Mountain} alt='' />

                </div>
            </div>

            {show &&
                <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 bg-[#333333] bg-opacity-50 animate-[fadeIn_.1s_linear]">
                    <div className="bg-[#AC93A7] border-[1px] border-[#181818] text-center text-[#181818] p-4 w-[25vw] rounded-3xl overflow-hidden shadow-2xl shadow-[#181818]">
                        <h4 className="mb-[1.5vw] text-[2vw]">This is a modal</h4>

                        <form>
                            <h5 className="text-[1vw]">Heres a form:</h5>
                            <input className="mb-[1.5vw] w-[20vw] h-[2vw] bg-[#AC93A7] border-[1px] border-[#181818] outline-none text-center rounded-[4px] text-[1vw] focus:border-[#d52727]"></input>
                            <h5 className="text-[1vw]">Idk type your email:</h5>
                            <input className="mb-[1.5vw] w-[20vw] h-[2vw] bg-[#AC93A7] border-[1px] border-[#181818] outline-none text-center rounded-[4px] text-[1vw] focus:border-[#d52727]"></input>
                            <h5 className="text-[1vw]">Select field for fun:</h5>
                            <select className="mb-[1.5vw] w-[20vw] h-[2vw] bg-[#AC93A7] border-[1px] border-[#181818] outline-none text-center rounded-[4px] text-[1vw] focus:border-[#d52727]">
                                <option>option 1</option>
                                <option>option 2</option>
                                <option>option 3</option>
                            </select>
                            <button className="font-pfd-bold text-[1.2vw] text-[#181818] w-[15vw] h-[2vw] bg-[#E77272] border-[1px] border-[#181818] rounded-[4px] transition-all duration-200 ease-linear mb-[1vw] hover:bg-[#d52727]" onClick={toggleModal}>Close</button>
                        </form>

                    </div>
                </div>
            }
        </div>
    )
}