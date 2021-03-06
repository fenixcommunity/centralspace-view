import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

//todo alternative to REDUX. I preffer using REDUX
// we can add also reducer https://youtu.be/uXWycyeTeCs
function ThemeContextProvider(props) {
    const [theme, setTheme] = useState(
        {
            isLightTheme: true,
            light: { code: '#555', ui: '#ddd', background: '#eee' },
            dark: { code: '#ddd', ui: '#333', background: '#555' }
        }
    )

    const toggleTheme = () => {
        setTheme({ ...theme, isLightTheme: !theme.isLightTheme });
    }

    return (
        // wrapper
        <ThemeContext.Provider value={{ theme, toggleTheme: toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )

}

export default ThemeContextProvider;