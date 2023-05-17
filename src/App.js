import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Basic from './Components/Basic/Basic'
import Mui from './Components/Mui/Mui'
import Tailwind from './Components/Tailwind/Tailwind'
import Rebass from './Components/Rebass'
import Styled from './Components/Styled/Styled'

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/Basic' element={<Basic />} />
                    <Route path='/Mui' element={<Mui />} />
                    <Route path='/Tailwind' element={<Tailwind />} />
                    <Route path='/Rebass' element={<Rebass />} />
                    <Route path='/Styled' element={<Styled />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
