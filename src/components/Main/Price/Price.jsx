import React from 'react';
import styles from './Price.module.scss';
import phoneLogo from '../../../assets/phone.svg'
import safeLogo from '../../../assets/safe.svg'
import {Element} from 'react-scroll'

function Price(){
    return (
        <Element name='priceblock'>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <h1>Цены</h1>
                    <div className={styles.allblock}>
                        <div className={styles.info}>
                            <div className={styles.inblockinfo}>
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Функционал</th>
                                        <th>Стоимость</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className={styles.tdshechka}>Сбор запросов по конкурентам</td>
                                        <td className={styles.tdshechka}><span className={styles.price}>100 руб.</span> за задачу</td>
                                    </tr>
                                    <tr>
                                        <td>Кластеризатор по ТОП</td>
                                        <td><span className={styles.price}>0.1 руб.</span> за фразу</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className={styles.rightblock}>
                            <div className={styles.firstline}>
                                <img src={phoneLogo} alt="phone"/>
                                <div className={styles.textblock}>
                                    <h2>Никаких тарифов</h2>
                                    <p className={styles.paragraph}>Пополняйте на ту сумму, которую нужно сейчас, не переплачивая за тариф</p>
                                </div>
                            </div>
                            <div className={styles.secondline}>
                                <img src={safeLogo} alt="safe"/>
                                <div className={styles.textblock}>
                                    <h2>Не сгорает баланс</h2>
                                    <p className={styles.paragraph}>Нет ограничений по времени</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Price;