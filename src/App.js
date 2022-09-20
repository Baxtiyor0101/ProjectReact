import React from "react";
// import Cards from "./components/Cards/Cards";
// import { Home } from "./components/Home/Home";
import "./App.css";
// import State from "./components/State/State";
// import Usestate from "./components/useStates/Usestate";
import AddTodo from "./components/AddTodo";
import Map from "./components/Map/Map";
import { data } from "./mock/data";
function App() {
  return (
    <div>
      {/* <Map values={data} /> */}
      <AddTodo />
      {/* <State /> */}
      {/* <Usestate /> */}
      {/* <Home name="Javohir" familya="Tursunov" age="23" />
      <br />
      <Home name="Asagfcgfdbek" familya="roziyev" age="25" />
      <Home name="Asadcdsfgdbek" familya="roziyev" age="25" />
      <Home name="Asadbek" familya="roziyev" age="25" />
      <Home name="Asa45545dbek" familya="roziyev" age="25" />
      <Home name="Asadbek" familya="roziyev" age="25" />
      <Home name="Asa45dbek" familya="roziyev" age="25" />
      <Home name="Asadbek" familya="roziyev" age="25" /> */}
      {/* <div className="app">
        <Cards
          title="Friendly Painter"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et maiores
          dicta facere eum magni."
          task="Practice"
          date="01.01.2022"
        />
        <Cards
          title="Best Friends"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
          task="webDevelooper"
          date="45678"
        />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div> */}
    </div>
  );
}

export default App;
