import logo from './logo.svg';
import styles from './App.module.scss';
import {Route, Routes} from "react-router-dom";
import Main from "./components/Main/Main.jsx";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.wrapper}>
        <Header />
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
