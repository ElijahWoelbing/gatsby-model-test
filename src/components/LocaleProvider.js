import React, { useContext, useState } from 'react';

const defaultlocale = {
    locale: 'en-US'
};

export const LocaleContext = React.createContext();
export const LocaleUpdateContext = React.createContext();

export function useLocale() {
    return useContext(LocaleContext);
}

export function useLocaleUpdate() {
    return useContext(LocaleUpdateContext);
}

export default function LocaleProvider({ children }) {
    const [locale, setlocale] = useState(defaultlocale);

    function changelocale(updatedlocale) {
        setlocale((prevlocale) => {
            prevlocale.locale = updatedlocale;
            return prevlocale;
        })
    }

    return (
        <LocaleContext.Provider value={locale}>
            <LocaleUpdateContext.Provider value={changelocale}>
                {children}
            </LocaleUpdateContext.Provider>
        </LocaleContext.Provider>
    )
}