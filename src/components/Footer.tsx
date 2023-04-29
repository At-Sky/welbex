import React from 'react';
import styles from '@/styles/Footer.module.scss'
import Image from "next/image";
import telegram from "../../public/telegram.svg";
import viber from "../../public/viber.svg";
import whatsapp from "../../public/whatsapp.svg";

function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <h3 className={styles.nav__title}>О компании</h3>
                <a href={''} className={styles.nav__item}>Партнёрская программа</a>
                <a href={''} className={styles.nav__item}>Вакансии</a>
            </nav>
            <nav className={styles.nav}>
                <div className={styles.nav__container}>
                    <h3 className={styles.nav__title}>Меню</h3>
                    <a href={''} className={styles.nav__item}>Расчет стоимости</a>
                    <a href={''} className={styles.nav__item}>Услуги</a>
                    <a href={''} className={styles.nav__item}>Виджеты</a>
                    <a href={''} className={styles.nav__item}>Интеграции</a>
                    <a href={''} className={styles.nav__item}>Наши клиенты</a>
                </div>
                <div className={styles.nav__container}>
                    <a href={''} className={styles.nav__item}>Благодарственные письма</a>
                    <a href={''} className={styles.nav__item}>Кейсы</a>
                    <a href={''} className={styles.nav__item}>Сертификаты</a>
                    <a href={''} className={styles.nav__item}>Блог на Youtube</a>
                    <a href={''} className={styles.nav__item}>Вопрос / Ответ</a>
                </div>
            </nav>
            <nav className={styles.nav}>
                <h3 className={styles.nav__title}>Контакты</h3>
                <div className={styles.nav__item + ' ' + styles.nav__item_contacts}>
                    <a href={''} className={styles.nav__item}>+7 555 555-55-55</a>
                    <div className={styles.nav__item + ' ' + styles.socials}>
                        <a className={styles.socials__item}>
                            <Image src={telegram} alt={'telegram'}/>
                        </a>
                        <a className={styles.socials__item}>
                            <Image src={viber} alt={'viber'}/>
                        </a>
                        <a className={styles.socials__item}>
                            <Image src={whatsapp} alt={'whatsapp'}/>
                        </a>
                    </div>
                    <a href={''} className={styles.nav__item}>Москва, Путевой проезд 3с1, к 902</a>
                </div>
            </nav>

            <p className={styles.policy}>
                ©WELBEX 2022. Все права защищены.<br/>
                <a>Политика конфиденциальности</a>
            </p>
        </footer>
    );
}

export default Footer;
