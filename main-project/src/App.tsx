import React, { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const [activeTab, setActiveTab] = useState("");
  const userInfo = useSelector((state: any) => state.userInfo);

  const goTo = (url: string) => {
    window.history.pushState(null, url, url);
    setActiveTab(url);
  };

  return (
    <div className="App">
      <ul className="App-header">
        <li
          className={activeTab === "/project1" ? "active" : undefined}
          onClick={() => goTo("/project1")}
        >
          子应用1（react)
        </li>
        <li>子应用2（react)</li>
        <li
          className={activeTab === "/project3" ? "active" : undefined}
          onClick={() => goTo("/project3")}
        >
          子应用3（vue)
        </li>
        <li>用户名：{userInfo.username}</li>
      </ul>
      <main id="app"></main>
    </div>
  );
}

export default App;
