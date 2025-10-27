// react router stuff will go in App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import ResultsPage from './pages/ResultsPage/ResultsPage';


function App() {
  const [search, setSearch] = useState("");


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage search={search} setSearch={setSearch} />} />
        <Route path='/results' element={<ResultsPage search={search}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
