import "./App.css";
import { Chat } from "./components/Chat";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import Mainroutes from "./Mainroutes";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Mainroutes />
      <Footer/>
    </div>
  );
}

export default App;
