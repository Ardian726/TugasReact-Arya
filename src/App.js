import logo from "./logo.svg";
import "./App.css";
import Tugas7 from './tugas7';
import Tugas8 from "./tugas8";
import Tugas9 from "./tugas9";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <h1>Woi, Saya Ardian Arya Putra</h1>
          <hr></hr>
          <p>Saya Dari Kelas 12</p>
        </div>
      </div>
      <div>
        <Tugas7></Tugas7>
      </div>
      <div>
        <Tugas8 />
      </div>
      <div>
        <Tugas9 />
      </div>
    </div>
  );
}

export default App;
