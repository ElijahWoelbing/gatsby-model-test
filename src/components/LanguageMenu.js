import React from 'react';
import { radioButtons, radioButton } from './LanguageMenu.module.scss';
import { useLocaleUpdate } from './LocaleProvider';
export default function LanguageMenu() {
    let updateLanguge = useLocaleUpdate();
        return (
        <div className={radioButtons} onChange={(e) => {
            let locale = e.target.value;
            updateLanguge(locale);
        }}>
            <label htmlFor='english'>English</label>
            <input className={radioButton} type='radio' value='en-US' name="locale" defaultChecked />
            <label htmlFor='german'>German</label>
            <input className={radioButton} type='radio' value='de-DE' name="locale" />
        </div>
    )
}
