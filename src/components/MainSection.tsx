import React, { useState, useEffect } from 'react';
import styles from "@/styles/MainSection.module.scss"

function MainSection() {
    // let width = useCurrentWidth()
    //
    // const getWidth = () => window.innerWidth
    //     || document.documentElement.clientWidth
    //     || document.body.clientWidth;
    //
    // function useCurrentWidth() {
    //     // save current window width in the state object
    //     let [width, setWidth] = useState(getWidth());
    //
    //     useEffect(() => {
    //         const resizeListener = () => {
    //             // change width from the state object
    //             setWidth(getWidth())
    //         };
    //         // set resize listener
    //         window.addEventListener('resize', resizeListener);
    //
    //         // clean up function
    //         return () => {
    //             // remove resize listener
    //             window.removeEventListener('resize', resizeListener);
    //         }
    //     }, [])
    //
    //     return width;
    // }

    return (
        <section className={styles.section}>
            <div className={styles.section__container}>
                <h1 className={styles.section__title}>
                    Зарабатывайте<br/>
                    больше<br/>
                    <span className={styles.highlighted}>с WELBEX</span>
                </h1>
                <p className={styles.section__text}>
                    Развиваем и контролируем<br/>
                    продажи за вас
                </p>
            </div>
            <div className={styles.gifts}>
                <h2 className={styles.gifts__title}>
                    Вместе с
                    <span className={styles.highlighted}> бесплатной</span><br/>
                    <span className={styles.highlighted}>консультацией </span>
                    мы дарим:
                </h2>
                <div className={styles.gifts_list}>
                    <div className={styles.gift}>
                        <h3 className={styles.gift__title}>Виджеты</h3>
                        <h3 className={styles.gift__title + ' ' + styles.gift__title_mobile}>SKYPE аудит</h3>
                        <p className={styles.gift__text}>
                            30 готовых<br/> решений
                        </p>
                    </div>
                    <div className={styles.gift}>
                        <h3 className={styles.gift__title}>Dashboard</h3>
                        <h3 className={styles.gift__title + ' ' + styles.gift__title_mobile}>30 Виджетов</h3>
                        <p className={styles.gift__text}>
                            с показателями<br/>
                            вашего бизнеса
                        </p>
                    </div>
                    <div className={styles.gift}>
                        <h3 className={styles.gift__title}>Skype Аудит</h3>
                        <h3 className={styles.gift__title + ' ' + styles.gift__title_mobile}>Dashboard</h3>
                        <p className={styles.gift__text}>
                            отдела продаж<br/>
                            и CRM системы
                        </p>
                    </div>
                    <div className={styles.gift}>
                        <h3 className={styles.gift__title}>35 дней</h3>
                        <h3 className={styles.gift__title + ' ' + styles.gift__title_mobile}>Месяц AMOCRM</h3>
                        <p className={styles.gift__text}>
                            использования<br/>
                            CRM
                        </p>
                    </div>
                </div>
                <button className={styles.gifts__button}>
                    Получить консультацию
                </button>
            </div>
        </section>
    );
}

export default MainSection;
