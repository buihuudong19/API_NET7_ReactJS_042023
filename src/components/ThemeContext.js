import { useState, createContext, useEffect } from "react";

const themes = {
    dark: {
        backgroundColor: 'black',
        color: 'white'
    },
    light: {
        backgroundColor: 'white',
        color: 'black'
    }
}
const initialState = {
    dark: false,
    theme: themes.light,
    toggle: () => { }
}

/* Su dung ThemeContext chua du lieu (initialState) ma se chia se cho all components ben trong no  */
const ThemeContext = createContext(initialState)

function ThemeProvider({ children }) {
    const [dark, setDark] = useState(false) // Default theme is light

    // On mount, read the preferred theme from the persistence
    useEffect(() => {
        const isDark = localStorage.getItem('dark') === 'true' //'false'
        setDark(isDark)
    }, [dark])

    // To toggle between dark and light modes
    const toggle = () => {
        const isDark = !dark
        localStorage.setItem('dark', JSON.stringify(isDark))
        setDark(isDark)
    }
    const theme = dark ? themes.dark : themes.light

    return (
        <ThemeContext.Provider value={{ theme, dark, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}
//Export syntax
export { ThemeProvider, ThemeContext }

