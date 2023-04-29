import React, {useEffect, useState} from 'react';
import styles from '@/styles/Modal.module.scss'
import Image from "next/image";
import whatsapp from "../../public/whatsapp.svg";
import viber from "../../public/viber.svg";
import telegram from "../../public/telegram.svg";

interface IModal {
    isClicked: Boolean;
    handleClick: Function;
}

function Modal({isClicked, handleClick}: IModal): JSX.Element {
    const [clicked, setClicked] = useState<Boolean>(false);

    useEffect(() => {
        setClicked(isClicked)
    }, [isClicked])

    let toggleVisibility = () => {
        setClicked(!clicked)
        handleClick(!clicked)
    }

    return (
        <>
            <div
                className={clicked ? styles.overlay : styles.overlay + ' ' +styles.hidden}
                onClick={toggleVisibility}>
            </div>
            <div className={clicked ? styles.modal : styles.modal + ' ' + styles.hidden}>
                <div className={styles.close} onClick={toggleVisibility}>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                </div>
                <ul className={styles.menu}>
                    <li className={styles.menu__item}>
                        <a className={styles.menu__link}>Услуги</a>
                    </li>
                    <li className={styles.menu__item}>
                        <a className={styles.menu__link}>Виджеты</a>
                    </li>
                    <li className={styles.menu__item}>
                        <a className={styles.menu__link}>Интеграции</a>
                    </li>
                    <li className={styles.menu__item}>
                        <a className={styles.menu__link}>Кейсы</a>
                    </li>
                    <li className={styles.menu__item}>
                        <a className={styles.menu__link}>Сертификаты</a>
                    </li>
                    <li className={styles.menu__item}>
                        <a className={styles.menu__link}>
                            <Image src={telegram} alt={'telegram'}/>
                        </a>
                        <a className={styles.menu__link}>
                            <Image src={viber} alt={'viber'}/>
                        </a>
                        <a className={styles.menu__link}>
                            <Image src={whatsapp} alt={'whatsapp'}/>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Modal;