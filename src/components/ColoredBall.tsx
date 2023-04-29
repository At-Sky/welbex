import React, {useEffect, useState} from 'react';
import styles from '@/styles/ColoredBall.module.scss';

interface IColoredBallProps {
    width: number;

    height: number;

    background: string;

    top: number;

    left: string;

    opacity?: number;

    filter?: string;

    boxShadow?: string;

    backdropFilter?: string;

}
function ColoredBall(props: IColoredBallProps) {
    return (
        <div className={styles.ball} style={props}></div>
    );
}

export default ColoredBall;