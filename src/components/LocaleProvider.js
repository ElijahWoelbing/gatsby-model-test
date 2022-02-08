import React, { useContext, useState } from 'react';
export const LocaleContext = React.createContext();

export function useLocale() {
    return useContext(LocaleContext);
}

export default function LocaleProvider({ children }) {
    const [locale, setLocale] = useState({
        locale: 'en-US'
    });

    function changeLocale(updatedLocale) {
        setLocale((prevLocale) => {
            return { ...prevLocale, locale: updatedLocale }
        })
    }

    return (
        <LocaleContext.Provider value={{ locale, changeLocale }}>
            {children}
        </LocaleContext.Provider>
    )
}