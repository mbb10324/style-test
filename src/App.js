import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AntDesign from './Components/AntDesign'
import Basic from './Components/Basic/Basic'
import Bootstrap from './Components/Bootstrap'
import Mui from './Components/Mui'
import Tailwind from './Components/Tailwind'
import Rebass from './Components/Rebass'
import Styled from './Components/Styled'

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/Basic' element={<Basic />} />
                    <Route path='/Mui' element={<Mui />} />
                    <Route path='/AntDesign' element={<AntDesign />} />
                    <Route path='/Tailwind' element={<Tailwind />} />
                    <Route path='/Bootstrap' element={<Bootstrap />} />
                    <Route path='/Rebass' element={<Rebass />} />
                    <Route path='/Styled' element={<Styled />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
