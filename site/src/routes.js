import {BrowserRouter,Route, Routes} from 'react-router-dom'

import Home from './pages/home'
import Resultado from './pages/resultado'

export default function index(){
    return (
        <BrowserRouter>
          
            <Routes>
              
              <Route path='/' element={<Home/>} />
              <Route path='/resultado' element={<Resultado/>} />

            </Routes>
          
        </BrowserRouter>
    )
}