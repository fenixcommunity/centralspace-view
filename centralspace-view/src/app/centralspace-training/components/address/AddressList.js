import React, { useState, useEffect, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { ThemeContext } from '../../contexts/ThemeContext';
import ThemeToggle from '../theme/ThemeToggle';

// useState, useEffect, useContext -> HOOK
function AddressList() {
    //instead <ThemeContext.Consumer>{themeContext}.../> 
    //also we can use multiple contexts
    const { theme } = useContext(ThemeContext);
    const themeOption = theme.isLightTheme ? theme.light : theme.dark;

    // state = { ... } like in class component
    const [addresses, setAddresses] = useState([
        { city: 'Cracow', id: 1 },
        { city: 'Berlin', id: 2 }

    ]);

    const [region, setRegion] = useState("Silesian");

    useEffect(() => {
        console.log("hook addresses", addresses);
    }, [addresses]); // run only when we update addresses

    useEffect(() => {
        console.log("hook region", region);
    }, [region]);

    const addAddress = (city) => {
        setAddresses([...addresses, { city, id: uuid() }]);
    }

    const changeRegion = () => {
        setRegion(region + "bla bla bla");
    }
    return (
        <div className="address-list container">
            <div className="row">
                <div className="col s12">
                    <div className="card " style={{ background: themeOption.ui, color: themeOption.code }}>
                        <div className="card-content white-text">
                            <span className="card-title light-green-text">Address List</span>
                            {addresses.map((address) => {
                                return (
                                    <p className="grey-text" key={address.id}>{address.city}</p>
                                )
                            })}
                        </div>
                        <div className="card-action">
                            <button className="btn red" onClick={changeRegion}>Change region</button>
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddressList;
