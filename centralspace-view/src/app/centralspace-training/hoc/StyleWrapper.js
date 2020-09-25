import React from 'react'

function StyleWrapper(WrappedComponent) {

    const colours = ['red', 'blue', 'green'];
    const randomColour = colours[Math.floor(Math.random() * 2)];
    const className = randomColour + '-text';

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default StyleWrapper;