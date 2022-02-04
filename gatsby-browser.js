import React from "react";
import LocaleProvider from "./src/state/LocaleProvider";

export const wrapRootElement = ({ element }) => {
    return (
        <LocaleProvider>
            {element}
        </LocaleProvider>
    )
}