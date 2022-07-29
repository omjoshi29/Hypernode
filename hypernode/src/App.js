import './App.css';
import { Chat } from './components/Chat';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      {/* <Chat/> */}
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
