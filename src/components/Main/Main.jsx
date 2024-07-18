import React from 'react';
import styles from './Main.module.scss'
import InfoBlock from "./InfoBlock/InfoBlock";
import NouHau from "./NouHau/NouHau";
import VideoBlock from "./VideoBlock/VideoBlock";
import Price from "./Price/Price";
import Affilate from "./Affilate/Affilate";
import Questions from "./Questions/Questions";
import Registration from "../Modal/Modal";

function Main({activeBurger}){
    return (
        <div className={activeBurger ? `${styles.wrapperfalse} ${styles.wrapper}` : styles.wrapper}>
            <InfoBlock/>
            <NouHau/>
            <VideoBlock/>
            <Price/>
            <Questions/>
            <Affilate />
        </div>
    )
}

export default Main