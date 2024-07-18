import React from 'react';
import styles from './BurgerMenu.module.scss'
import {scroller} from "react-scroll";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import Modal from "../../Modal/Modal";

const BurgerMenu = ({isActive, setActive}) => {
    const[activeModal, setActiveModal] = React.useState(false);

    React.useEffect(() =>{
        if (isActive) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }

    }, [isActive])

    const scrollTo = (name) => {
        scroller.scrollTo(name, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -100
            // containerId: 'ContainerElementID',
        });

        setActive(false);
    }

    const [currentTab, setCurrentTab] = React.useState('register');

    const tabs = {
        'register': <Registration currentTab={currentTab} setCurrentTab={setCurrentTab} setActive={setActiveModal}/>,
        'login': <Login currentTab={currentTab} setCurrentTab={setCurrentTab} setActive={setActiveModal}/>,
    }

    const CurrentTab = tabs[currentTab]

    const openModal = (str) => {
        setActiveModal(true)
        setCurrentTab(str)
    }

    return (
        <div className={`${styles.wrapper} ${isActive ? styles.active : ""}`}>
            <div className={styles.profileblock}>
                <div className={styles.profileblockcontent}>
                    <p>Личный кабинет</p>
                    <div className={styles.buttons}>
                        <button className={styles.registration} onClick={() => openModal('register')}>РЕГИСТРАЦИЯ</button>
                        <button className={styles.login} onClick={() => openModal('login')}>ВХОД</button>
                    </div>
                </div>
            </div>
            <div className={styles.list}>
                <li className={styles.how_works} onClick={() => scrollTo('videoblock')}>КАК РАБОТАЕТ?</li>
                <li className={styles.price} onClick={() => scrollTo('priceblock')}>ЦЕНЫ</li>
                <li className={styles.questions} onClick={() => scrollTo('questionblock')}>ЧАСТЫЕ ВОПРОСЫ</li>
            </div>
            <div className={styles.infoblock}>
                <div className={styles.firstblock}>
                    <p className={styles.headoflist}>Дни работы поддержки</p>
                    <h4>ПН-ВС. Каждый день</h4>
                    <h4>7:00-20:00 по Москве</h4>
                </div>
                <div className={styles.secondblock}>
                    <p className={styles.headoflist}>Контакты</p>
                    <h4>help@turbo-yadro.ru</h4>
                    <h4>+7-960-996-95-76</h4>
                </div>
            </div>

            <Modal active={activeModal} setActive={setActiveModal}>
                {CurrentTab}
            </Modal>
        </div>
    );
};

export default BurgerMenu;