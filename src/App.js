import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/About';
import Report from './components/Report';
import 'react-toastify/dist/ReactToastify.css';
import Emergency from './components/Emergency';

function App() {
  return (
    <Router>
      <div className='sm:px-10 md:px-44 bg-[#36454f]'>
        <div className='bg-white h-full'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='/:crime' element={<Report />} />
            <Route path='emergency' element={<Emergency />} />
          </Routes>
          <div className='text-center p-5 text-slate-400'>
            <footer>
              <hr></hr>
              Nigerian Police Force
            </footer>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
