import React from "react"
import { Link } from "react-router-dom"

function FriendList({id, name, email, img, text, bg}) {
    return (
        <li>
            <Link to={'/Profile'} state={{id, name, email, img, text, bg}}>
                <span className="profile-img" style={{backgroundImage : 'url('+img+')'}}></span>
                <span className="profile-name">{name}</span>
                <span className="profile-messages">{text}</span>
            </Link>
        </li>
    )
}
export default FriendList