import './App.css';
import Count from './components/count';
import InputName from './components/inputName';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <InputName/>
        <Count/>
      </header>
    </div>
  );
}

export default App;