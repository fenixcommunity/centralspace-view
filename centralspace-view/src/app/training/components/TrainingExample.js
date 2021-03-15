import React, { useState, useEffect, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { ThemeContext } from './ThemeContext';
import ThemeToggle from './ThemeToggle';

// useState, useEffect, useContext -> HOOK
function TrainingExample() {
    //instead <ThemeContext.Consumer>{themeContext}.../> 
    //also we can use multiple contexts
    const { theme } = useContext(ThemeContext);
    const themeOption = theme.isLightTheme ? theme.light : theme.dark;

    // state = { ... } like in class component
    const [addresses, setAddresses] = useState([
        { city: 'Cracow', id: 1 },
        { city: 'Berlin', id: 2 }

    ]);

    const [region, setRegion] = useState(null)

    useEffect(() => {
        console.log("hook addresses", addresses);
    }, [addresses]); // run only when we update addresses

    useEffect(() => {
        console.log("hook region", region);
    }, [region]);

    return (
        <div className="container">
            <div>
                <ThemeToggle />
            </div>
        </div>
    )
}

export default TrainingExample;
