import { useState } from "react";
import AppRouter from "./AppRouter";
import Header from "./components/Header/Header";

import './App.css';
import Lims from "./components/Lims/Lims";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  return (
    <div className="App">
      <div className="app-inner-wrapper">
        <Lims />
        <div className="app-content">
          <Header
            menuBtnHandleClick={() => setMenuIsOpen(!menuIsOpen)}
            menuIsOpen={menuIsOpen} />
          <AppRouter />
        </div>
      </div>
    </div>
  );
}

export default App;
