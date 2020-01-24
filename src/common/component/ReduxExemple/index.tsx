import React, { useState } from 'react'; //import de modules en premier
import { createUseStyles } from 'react-jss'; //import de modules en premier
import { useDispatch, useSelector } from 'react-redux'; //import de modules en premier

import { setLocale } from '../../state/actions';
import { setBackgroundColor } from '../../state/actions';
import { getLocale, getBackgroundColor } from '../../state/selectors';
import styles from './style'; //import relatifs en dernier

const ReduxExemple = () => {
    const dispatch = useDispatch();
    const useStyles = createUseStyles(styles);
    const classes = useStyles();
    const [color, setColor] = useState([0, 0, 0]);
    const locale = useSelector(getLocale);

    const changeLocale = (locale: string) => {
        if (locale === 'fr') dispatch(setLocale('en'));
        if (locale === 'en') dispatch(setLocale('fr'));
    };

    const randomBackgroundColor: () => number[] = () => {
        const randomColor = [
            Math.floor(Math.random() * Math.floor(255)),
            Math.floor(Math.random() * Math.floor(255)),
            Math.floor(Math.random() * Math.floor(255)),
        ];
        dispatch(setBackgroundColor(randomColor));
        return randomColor;
    };
    return (
        <div
            className={classes.container}
            style={{
                backgroundColor: `rgba(${color[0]},${color[1]},${color[2]}, 1.0 )`,
            }}
        >
            <div className={classes.locale}>{locale}</div>
            <button
                onClick={e => {
                    e.preventDefault();
                    changeLocale(locale);
                }}
            >
                Change locale
            </button>
            <button
                onClick={e => {
                    e.preventDefault();
                    setColor(randomBackgroundColor);
                }}
            >
                Change Background
            </button>
            <div>
                background set to rgba(
                {useSelector(getBackgroundColor)})
            </div>
        </div>
    );
};

export default ReduxExemple;
