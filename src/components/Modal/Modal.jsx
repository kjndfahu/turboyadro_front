import React from 'react';
import styles from './Modal.module.scss'

function Modal({active, setActive,  children}){
    console.log(active,'active')

    return (
        <>
            <div className={active ? `${styles.wrapperactive} ${styles.wrapper}` : styles.wrapper}
                 onClick={() => setActive(false)}>
                <div className={styles.block} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>


        </>


    )
}

export default Modal;