import React from 'react';
import styles from './Item.module.scss'

function Item({item}){
    const [isVisible, setIsVisible] = React.useState(false)

    const toggleAccordion = () => setIsVisible(!isVisible)
    return (
        <div className={styles.item} onClick={toggleAccordion}>
            <div className={styles.firstline}>
                <h3 className={`${styles.questions} ${isVisible ? styles.active__question : ''}`}>{item.q}</h3>
                <svg className={`${styles.button} ${isVisible ? styles.rotate : ''}`} width="10" height="17" viewBox="0 0 10 17" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 16L8.5 8.5L1 0.999999" stroke="#A0A2B4" strokeWidth="1.5"
                          strokeLinecap="round"/>
                </svg>
            </div>
            <div className={`${styles.answear} ${isVisible ? styles.active__answear : ''}`}>
                <p>{item.a}</p>
            </div>
        </div>
    )
}

export default Item