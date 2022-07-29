import "./App.css";
import { Chat } from "./components/Chat";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import Mainroutes from "./Mainroutes";

function App() {
  return (
    <div className="App">
      {/* <Chat/> */}
      <Navbar/>
      <Mainroutes />
    </div>
  );
}

export default App;
