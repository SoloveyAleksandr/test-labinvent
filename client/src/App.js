import AppRouter from "./AppRouter";
import Header from "./components/Header/Header";
import Lims from "./components/Lims/Lims";
import NavBar from "./components/NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";

import './App.css';
import { setOpenMenu } from "./store";

function App() {
  const reduxDispatch = useDispatch();
  const store = useSelector(store => store.AppStore);

  function openMenu() {
    reduxDispatch(setOpenMenu());
  }

  return (
    <div className="App">
      <div className="app-inner-wrapper">
        <NavBar
          isOpen={store.menuIsOpen} />
        <Lims
          totalTime={store.currentMethod.totalTime}
          currentTime={store.currentMethod.currentTime} />
        <div className="app-content">
          <Header
            menuBtnHandleClick={openMenu}
            menuIsOpen={store.menuIsOpen} />
          <AppRouter />
        </div>
      </div>
    </div>
  );
}

export default App;
