import React from 'react'

function SectionDivided(props) {
    const contentLeft = props.contentLeft;
    const contentRight = props.contentRight;
    return (
        <section className="container scrollspy" id="services">
            <div className="row">
                <div className={`col s12 ${contentLeft.division} offset-${contentLeft.offset}`}>
                    {contentLeft.content}
                </div>
                <div className={`col s12 ${contentRight.division} offset-${contentRight.offset}`}>
                    {contentRight.content}
                </div>
            </div>
        </section>
    )
}

export default SectionDivided;
