import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';

import Home from './Component/App/Home';
import Assujetti from './Component/Assujetti';
import NonAssujetti from './Component/NonAssujetti';

function App() {
  return (
  <div id="container">
    <div className="App">
    <BrowserRouter>
    <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Assujetti' element={<Assujetti />} />
          <Route path='/non_assujetti' element={<NonAssujetti />} />
    </Routes>
    </BrowserRouter>
    </div>
  </div>
  );
}

export default App;
