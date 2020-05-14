import React from 'react'

function Contact(props) {
    setTimeout(() => {
        props.history.push('accounts')
    }, 2000)
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>put you EMAIL</p>
        </div>
    )
}

export default Contact;