import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {

  const goTo = () => {
    console.log('xxx:', window.history)
    window.history.pushState(null, '/project3', '/project3')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={()=> goTo()}>加载子应用</button>
      <main id="app"></main>
    </div>
  );
}

export default App;
