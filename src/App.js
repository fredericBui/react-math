import './App.css';
import Operation from './Components/Operation';


function App() {
  return (
    <div className='App'>
      <Operation operator="+"></Operation>
      <Operation operator="-"></Operation>
      <Operation operator="*"></Operation>
      <Operation operator="/"></Operation>
    </div>
  );
}

export default App;
