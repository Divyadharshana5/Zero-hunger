import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../src/pages/Home'
import Take from '../src/pages/Take'
import Search from '../src/pages/Search'
import Layout from './components/Layout';



function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/recipe' Component={Layout}></Route>
        <Route path='/search' Component={Search}></Route>
        <Route path='/take' Component={Take}></Route>
      </Routes>
     </Router>
     {/* <Layout /> */}
    </div>
  );
}

export default App;
