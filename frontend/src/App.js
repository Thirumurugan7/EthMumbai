import './App.css';
import Home from '../src/pages/Home'
import Track from '../src/pages/Track'
import ProjectID from './pages/ProjectID';
import Auth from './pages/Auth';
import ExternalLink from './components/External';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="">
      {/* <Home /> */}
      <Router>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/track' Component={Track}/>
          <Route path='/external' Component={ProjectID}/>
          <Route path='/auth' Component={Auth}/>
          {/* <Route path='/external' Component={ExternalLink}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
