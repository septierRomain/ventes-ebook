import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';

import Home from './Component/App/Home';

function App() {
  return (
  <div id="container">
    <div className="App">
    <BrowserRouter>
    <Routes>
          <Route exact path='/' element={<Home />} />
    </Routes>
    </BrowserRouter>
    </div>
  </div>
  );
}

export default App;
