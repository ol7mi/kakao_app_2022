import React from "react";
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
import '../styles/Chatting.scss';

function Chatting() {
    const location = useLocation();
    const { id, name, email, img, bg } = location.state;
    
    console.log(location.state);

    return (
        <>
            <header className="chat_header">
                <div className="status_bar">
                    <div className="left_item">
                        <i className="fas fa-plane"></i>
                        <i className="fas fa-wifi"></i>
                    </div>
                    <div className="center_item">
                        <span>17<span>:</span>33</span>
                    </div>
                    <div className="right_item">
                        <i className="far fa-moon"></i>
                        <i className="fab fa-bluetooth-b"></i>
                        <span><span>100</span>%</span>
                        <i className="fas fa-battery-full"></i>
                    </div>
                </div>
                <div className="title_bar">
                    <h1>{name}</h1>
                    <div className="left_item">
                        <Link to="/chats">
                            <i className="fas fa-angle-left"></i>
                        </Link>
                    </div>
                    <div className="right_item">
                        <i className="fas fa-search"></i>
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </header>
            <main className="chat_main">
                <span className="date_info">Monday, April 18, 2022</span>
                <div className="chat_box my">
                    <span className="chat">Hello!</span>
                    <span className="chat">Hello! This is a test message.</span>
                    <span className="chat">This is a test message.</span>
                    <span className="chat_time"><span>16</span>:<span>30</span></span>
                </div>
                <div className="chat_box other">
                    <div className="other_info">
                        <Link to={'/Profile'} state={{id, name, email, img, bg}}>
                            <span className="profile_img empty"><img src={img}></img></span>
                        </Link>
                    </div>
                    <div className="other_info2">
                        <span className="profile_name">{name}</span>
                        <span className="chat">And this is an answer</span>
                        <span className="chat">And this is an answer And this is an answer</span>
                        <span className="chat">And this is an answer</span>
                        <span className="chat_time"><span>16</span>:<span>30</span></span>
                    </div>
                </div>
            </main>
            <footer>
                <span className="plus_btn"><Link to=""><i className="fas fa-plus"></i></Link></span>
                <form accept="/" method="post">
                    <fieldset className="text_box">
                        {/* <legend className="blind">채팅 입력창</legend>
                        <label className="blind">채팅 입력</label> */}
                        <input type="text" id="chatting" className="text_field"></input>
                        <span className="emoticon_btn"><a href="#"><i className="far fa-smile"></i></a></span>
                        <span className="voice_btn"><Link to=""><i className="fas fa-microphone"></i></Link></span>
                    </fieldset>
                </form>
            </footer>
        </>
    )
}

export default Chatting;