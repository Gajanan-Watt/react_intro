import logo from './logo.svg';
import './App.css';

function App() {
  const arr1 = ["Android", "Blackberry", "Windows phone", "iPhone"];
  const arr2 = ["Samsung", "HTC", "Micromax", "Apple"];
  return (
    <div className="App" >
      <h1 style={{textAlign: "left"}}>Mobile Operating System</h1>
      <ul>
      {arr1.map((el) => (
        <li style={{textAlign: "left"}}>{el}</li>
      ))}
      </ul>

      <h1 style={{textAlign: "left"}}>Mobile Manufacturers</h1>
      <ul>
      {arr2.map((el) => (
        <li style={{textAlign: "left"}}>{el}</li>
      ))}
      </ul>
    </div>
  );
}

export default App;
