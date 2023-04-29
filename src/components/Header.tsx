import React from 'react';
import styles from '@/styles/Header.module.scss';
import Image from "next/image";
import logo from '../../public/logo_welbex.svg';
import telegram from '../../public/telegram.svg';
import viber from '../../public/viber.svg';
import whatsapp from '../../public/whatsapp.svg';

interface IHeaderProps {
    handleClick: Function;
}
function Header({handleClick}: IHeaderProps) {
    return (
        <header className={styles.header}>
            <div className={styles.logo__container}>
                <Image width={140} height={24} src={logo} alt={'logo'}/>
                <span className={styles.header__about}>
                    крупный интегратор CRM<br/>
                    в Росcии и ещё 8 странах
                </span>
            </div>
            <nav className={styles.navbar}>
                <a href={''} className={styles.navbar__link}>Услуги</a>
                <a href={''} className={styles.navbar__link}>Виджеты</a>
                <a href={''} className={styles.navbar__link}>Интеграции</a>
                <a href={''} className={styles.navbar__link}>Кейсы</a>
                <a href={''} className={styles.navbar__link}>Сертификаты</a>
            </nav>
            <a href="tel:+7 555 555-55-55" className={styles.header__phone}>+7 555 555-55-55</a>
            <div className={styles.socials}>
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
            <div className={styles.header__burger} onClick={() => handleClick(true)}>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
            </div>
        </header>
    );
}

export default Header;