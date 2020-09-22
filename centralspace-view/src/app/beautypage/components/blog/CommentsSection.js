import React from 'react'
import avatar1 from '../../../../resources/beautypage/images/people/avatar1.jpg';
import avatar2 from '../../../../resources/beautypage/images/people/avatar2.jpg';
import avatar3 from '../../../../resources/beautypage/images/people/avatar3.jpg';
import Comment from './Comment';

function CommentsSection() {
    return (
        <div className="container">
            <ul className="collection with-header">
                <li className="collection-header"><h4>Comments</h4></li>

                <Comment
                    authorAvatar={avatar1}
                    title="Ryu"
                    content="black-belt"
                    emailRef="/" />
                <Comment
                    authorAvatar={avatar3}
                    title="Yoshi"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis aliquam orci. Orci
                             varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis aliquam orci. Orci
                             varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    emailRef="/" />
                <Comment authorAvatar={avatar2} title="Max" content="green-belt" emailRef="/" />
            </ul>
        </div>
    )
}

export default CommentsSection;