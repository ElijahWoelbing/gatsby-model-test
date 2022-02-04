import React from 'react';
import { radioButtons, radioButton } from './LanguageMenu.module.scss';
import { useLocale } from '../state/LocaleProvider';
export default function LanguageMenu() {
    const { changeLocale } = useLocale();
    return (
        <div className={radioButtons} onChange={(e) => {
            changeLocale(e.target.value);
        }}>
            <label htmlFor='english'>English</label>
            <input className={radioButton} type='radio' value='en-US' name="locale" defaultChecked />
            <label htmlFor='german'>German</label>
            <input className={radioButton} type='radio' value='de-DE' name="locale" />
        </div>
    )
}
