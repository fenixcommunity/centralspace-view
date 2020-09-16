import React, { useState } from 'react';

function CreateAddress({ addAddress }) {
    const [city, setCity] = useState('');

    const handleOnCityTextChange = (e) => {
        setCity(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addAddress(city);
        setCity('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Address city: </label>
            <input className="autocomplete" type="text" value={city} required onChange={handleOnCityTextChange} />
            <input className="btn" type="submit" value="Create address" />
        </form>
    )
}

export default CreateAddress;
