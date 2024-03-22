import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../src/pages/Home'
import Donate from '../src/pages/Donate'
import Take from '../src/pages/Take'


function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/donate' Component={Donate}></Route>
        <Route path='/take' Component={Take}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
