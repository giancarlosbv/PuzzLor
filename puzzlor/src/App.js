// import logo from './logo.svg';
// import './App.css';
import Header from "./components/Header"
import Logo from "./components/Logo"
import Nav from "./components/Nav"
import Sidebar from "./components/Sidebar"
import Board from "./components/Board"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Board></Board>
      <Logo></Logo>
      <Nav></Nav>
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;
