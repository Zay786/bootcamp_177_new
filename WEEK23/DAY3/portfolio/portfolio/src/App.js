import Home from "./Home";
import About from "./About";
import MyProjects from "./MyProjects";   
import {Routes } from "react-router-dom";
import {Route, Link} from "react-router-dom";
import MyBestFriend from "./MyBestFriend";

function App() {
  return (
    <>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/myprojects">My Projects</Link>
      </li>
    </ul>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/myprojects" element={<MyProjects />} />
      <Route path="/mybestfriend/:name" element={<MyBestFriend />} />
    </Routes>
 
    </>
  );
}

export default App;
