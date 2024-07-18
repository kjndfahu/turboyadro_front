import logo from './logo.svg';
import styles from './App.module.scss';
import {Route, Routes} from "react-router-dom";
import Main from "./components/Main/Main.jsx";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import React from "react";

function App() {
    const [activeBurger, setActiveBurger] = React.useState(false)
    console.log(activeBurger)

  return (
    <div className={activeBurger ? `${styles.wrapperfalse} ${styles.wrapper}` : styles.wrapper}>
        <Header activeBurger={activeBurger} setActiveBurger={setActiveBurger} />
      <div className={styles.content}>
        <Routes>
            <Route path="/" element={<Main />}></Route>
        </Routes>
      </div>
        <Footer/>
    </div>
  );
}

export default App;
