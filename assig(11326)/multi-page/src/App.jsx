import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contract from './pages/contract';

function App(){

  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contract/>}/>
      </Routes>
    </Router>
  );

};

export default App;