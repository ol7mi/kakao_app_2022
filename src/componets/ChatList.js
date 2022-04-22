import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

export default function ChatList({id, name, email, comment, img, bg}) {
    return (
        <li>
            <Link to={'/chatting'}
                state={{id, name, email, img, bg}}>
                <span className="chats_img" style={{backgroundImage : "url("+img+")"}}></span>
                <span className="chats_cont">
                    <span className="chats_name">{name}</span>
                    <span className="chats_latest">{comment}</span>
                </span>
                <span className="chats_time"><span>17</span>:<span>33</span></span>
            </Link>    
        </li>
    )
}