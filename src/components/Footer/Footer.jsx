import React from 'react';
import styles from './Footer.module.scss'
import logo from '../../assets/footerlogo.svg'

function Footer(){
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.block}>
                    <img className={styles.logo} src={logo} alt="logo"/>
                    <p className={styles.paragrph}>Турбо Ядро © [2022]. Все права защищены</p>
                </div>
                <div className={styles.block}>
                    <p className={styles.paragrph} >Дни работы поддержки</p>
                        <h4>ПН-ВС. Каждый день</h4>
                        <h4>7:00-20:00 по Москве</h4>
                </div>
                <div className={styles.block}>
                    <p className={styles.paragrph}>Контакты</p>
                        <h4>help@turbo-yadro.ru</h4>
                        <h4>+7-960-996-95-76</h4>
                </div>
                <div className={styles.block}>
                <p className={styles.paragrph}>Пользовательское соглашение</p>
                    <p className={styles.paragrph} >Политика оплаты и возврата</p>
                    <p className={styles.paragrph}>Политика использования Cookie</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;