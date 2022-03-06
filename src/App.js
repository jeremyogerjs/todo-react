import './App.css';
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import Home from "./pages/Home.js";
import Afaire from "./pages/Afaire.js";

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h3>TODO LIST</h3>
      </header>
      
      <BrowserRouter>
      <nav className='nav'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todo/fait">A faire</Link>
          </li>
        </ul>
      </nav>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/todo/fait" element={<Afaire />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
