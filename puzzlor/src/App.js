// import logo from './logo.svg';
// import './App.css';
import Header from "./components/Header"
import Logo from "./components/Logo"
import Nav from "./components/Nav"
import Sidebar from "./components/Sidebar"
import Board from "./components/Board"
import { useEffect, useState } from "react"
import CardList from "./components/CardList"

function App() {

console.log(CardList[0].name);

  // console.log(data[0].name);

// const checkData = () => {
  // return data && data.length>0 && data.map(
  //   (item,index)=>
  //   <p>{item[index].name}</p>
  //   )
// }
console.dir(CardList.assets[0].gameAbsolutePath)
  return (
    <div className="App">
      {CardList.map((data,key) =>{
        return (
          <div key = {key}>
            {data.name}
            {/* {data.assets[0]} */}
            <img src = {data.assets[1]}></img>
          </div>
        )
      } )}

      
      {/* <Header></Header>
      <Board></Board>




      <Logo></Logo>
      <Nav></Nav>
      <Sidebar></Sidebar> */}
    </div>
  );
}

export default App;
