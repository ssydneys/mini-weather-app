import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Results from './pages/Results';
 
function App() { 
  return(
    <section id="central">
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/results/:city" element={<Results />} />
    </Routes>
    </section>
  )
}

export default App;