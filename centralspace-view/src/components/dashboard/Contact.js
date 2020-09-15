import React, { useState, useEffect } from 'react';
import { getUnique } from '../utils/Utils'

function Contact(props) {
    const [count, setCount] = useState(0); // temporary state that store only during invoking functional component
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const countriesJson = require("../../resources/countries.json");
        const uniqueCountry = getUnique(countriesJson.countries, "country");
        setCountries(uniqueCountry);
    }, [])


    const handleCountryClick = () => {
        if(count > 0) {
            setCustomTimeout();
        }
        setCount(count + 1)
    }

    const setCustomTimeout = () => {
        setTimeout(() => {
            props.history.push('/')
        }, 5000)
    }


    const countriesToRender = countries.length ? (
        countries.map(item => {
            return (
                <React.Fragment key={item.country.id}>
                    <p className="text-white">{item.country}</p>
                    <button className="btn red pulse" onClick={handleCountryClick}>counter</button>
                </React.Fragment>
            )
        })
    ) : (<p>No country</p>)

    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Click counter -> {count}</p>
            <div>{countriesToRender}</div>

        </div>
    )
}

export default Contact;