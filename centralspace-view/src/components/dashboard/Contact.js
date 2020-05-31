import React, { useState, useEffect } from 'react';
import { getUnique } from '../utils/Utils'

function Contact(props) {
    const [count, setCount] = useState(0); // temporary state that store only during invoking functional component
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        let countriesJson = require("./countries.json");
        let uniqueCountry = getUnique(countriesJson.countries, "country");
        setCountries(uniqueCountry);
    }, []);

    setTimeout(() => {
        props.history.push('accounts')
    }, 5000)

    const countriesToRender = countries.length ? (
        countries.map(item => {
            return (
                <p>{item.country}</p>
            )
        })
    ) : (<p>No country</p>)
    
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>put you EMAIL -> {count}</p>
            <p>{countriesToRender}</p>
            <button onClick={() => setCount(count + 1)}>counter</button>
        </div>
    )
}

export default Contact;