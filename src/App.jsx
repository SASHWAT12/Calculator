import './App.css';
import Display from './Components/Display';
import Keypad from './Components/Keypad';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
      </header>
      <main>
        <div className='calculator'>
          <Display />
          <br />
          <Keypad />
        </div>
      </main>
    </div>
  );
}

export default App;
