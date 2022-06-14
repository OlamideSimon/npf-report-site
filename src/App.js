import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/About';

function App() {
  return (
    <Router>
      <div className='sm:px-10 md:px-44 bg-[#36454f]'>
        <div className='bg-white h-full'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
