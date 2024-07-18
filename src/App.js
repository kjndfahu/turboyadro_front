import logo from './logo.svg';
import styles from './App.module.scss';
import {Route, Routes} from "react-router-dom";
import Main from "./components/Main/Main.jsx";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import React from "react";

function App() {
    const [activeBurger, setActiveBurger] = React.useState(false)

  return (
    <div className={styles.wrapper}>
        <Header activeBurger={activeBurger} setActive={setActiveBurger} />
      <div className={styles.content}>
        <Routes>
            <Route path="/" element={<Main activeBurger={activeBurger}/>}></Route>
        </Routes>
      </div>
        <Footer/>
    </div>
  );
}

export default App;
