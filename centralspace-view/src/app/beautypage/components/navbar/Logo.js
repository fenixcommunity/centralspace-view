import React from 'react'

function Logo(props) {
    return (
        <>
            {props.textStyle && (
                <a href="/beautypage" className="brand-logo">
                    <i className={`icon-diamond ${props.textStyle}`} />
                </a>
            )}
        </>
    )
}

export default Logo;
