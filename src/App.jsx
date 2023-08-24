import { Link } from "react-router-dom";
import Home from "./components/Home.jsx"
import "./App.css";

function App() {
  return (
      <div className="app-container">
        <nav className="navbar">
          <img src="icons/logo.svg" alt="Logo" className="logo" />
          <ul className="nav-list">
           
            <li>
              <Link to={"/Features"}>Features</Link>
            </li>
            <li>
              <Link to={"/Team"}>Team</Link>
            </li>
            <li>
              <Link to={"/SignIn"}>Sign In</Link>
            </li>
          </ul>
        </nav>
        <main className="main-container">
          <Home />
        </main>
      </div>
  );
}

export default App;
