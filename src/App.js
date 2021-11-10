import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';

import Home from './Component/App/Home';
import Assujetti from './Component/Assujetti';
import Others from './Component/Assujetti/Others';
import OthersOutside from './Component/Assujetti/OthersOutside';
import NonAssujetti from './Component/NonAssujetti';
import ForeignUnsubmit from './Component/NonAssujetti/ForeignUnsubmit';
import FranceUnsubmit from './Component/NonAssujetti/FranceUnsubmit';
import FranceUnsubmitUE from './Component/NonAssujetti/FranceUnsubmitUE';
import OSS from './Component/NonAssujetti/OSS';
import UE from './Component/NonAssujetti/UE';

function App() {
  return (
  <div id="container">
    <div className="App">
    <BrowserRouter>
    <Routes>
          <Route path='/' element={<Home />} />

          {/* Routes pour les assujetti */}
          <Route path='/Assujetti' element={<Assujetti />} />
          <Route path='/France' element={<Others />} />
          <Route path='/hors_France' element={<OthersOutside />} />

          {/* Routes pour les non assujetti */}
          <Route path='/non_assujetti' element={<NonAssujetti />} />
          <Route path='/non_assujetti_France' element={<FranceUnsubmit />} />
          <Route path='/non_assujetti_UE' element={<FranceUnsubmitUE />} />
          <Route path='/non_assujetti_hors_UE' element={<ForeignUnsubmit />} />
          <Route path='/OSS' element={<OSS />} />
          <Route path='/UE' element={<UE />} />

    </Routes>
    </BrowserRouter>
    </div>
  </div>
  );
}

export default App;
