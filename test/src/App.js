import logo from './logo.svg';
import './App.css';
import {FormComponent , SignMessageComponent, Greet} from 'onesign';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormComponent />
        <SignMessageComponent />
        <Greet />
      </header>
    </div>
  );
}

export default App;
