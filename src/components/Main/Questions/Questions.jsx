import React from "react";
import styles from "./Questions.module.scss";
import Item from "./Item/Item";
import {Element} from 'react-scroll'

function Questions() {
    const data = [
        {

            q: 'Насколько полной получается семантика?',
            a: 'Используется сразу несоклько платных, обновляемых баз, общей суммой 150 миллионов запросов. Сегодня практически не осталось ниш в которых не проработана seo-специалистами семантика. Вероятность найти новые ключи, крайне низкая. Поэтому, гораздо эффективнее взять готовую семантику конкурентов.'
        },
        {

            q: 'Почему не нужно чистить запросы?',
            a: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Duis ex purus, commodo eget placerat nec, efficitur a elit. Maecenas commodo nunc volutpat felis viverra efficitur. In ac laoreet leo, a ultricies nulla. Sed elementum et diam non commodo. Nullam eget ante bibendum, lobortis eros ut, congue metus. Sed eget lorem eros.'
        },
        {

            q: 'Возможна ли оплата для юридических лиц?',
            a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ex purus, commodo eget placerat nec, efficitur a elit. Maecenas commodo nunc volutpat felis viverra efficitur.'
        },
        {

            q: 'Почему класстеризатор не распределяет сразу по нескольким страницам?',
            a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ex purus, commodo eget placerat nec, efficitur a elit. Maecenas commodo nunc volutpat felis viverra efficitur. In ac laoreet leo, a ultricies nulla. Sed elementum et diam non commodo.'
        },
    ]

    return(
        <Element name='questionblock'>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <h1>Популярные вопросы</h1>
                    <div className={styles.accordion}>
                        {data.map((item) => (
                            <Item item={item} key={item}/>
                        ))}
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Questions