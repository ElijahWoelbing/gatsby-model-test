import React from 'react';
import LocaleProvider from './src/components/LocaleProvider';

export const wrapRootElement = ({ element }) => {
    return (
        <LocaleProvider>
            {element}
        </LocaleProvider>
    )
}