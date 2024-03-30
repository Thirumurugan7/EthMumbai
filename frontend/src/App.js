import './App.css';
import Home from '../src/pages/Home'
import Track from '../src/pages/Track'
import ProjectID from './pages/ProjectID';
import Auth from './pages/Auth';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="">
      {/* <Home /> */}
      <Router>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/track' Component={Track}/>
          <Route path='/projectid' Component={ProjectID}/>
          <Route path='/auth' Component={Auth}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
