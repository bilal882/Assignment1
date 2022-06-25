import "./Boostrap/Boostrap.css";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Main from "./Component/Main/Main";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Contact />
    </div>
  );
}

export default App;
