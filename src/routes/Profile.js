import React from "react";
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
import '../styles/Profile.scss';

function Profile() {
    const location = useLocation();
    const {id,  name, email, img, text, bg } = location.state;

    console.log(location.state);

    return (
        <>
            <header className="header_profile">
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
                    <h1 className="blind">Profile</h1>
                    <div className="left_item">
                        <Link to="/">
                            <i className="fas fa-times"></i>
                        </Link>
                    </div>
                    <div className="right_item"><a href="#"><i className="fas fa-user"></i></a></div>
                </div>
            </header>
            <main className="main profile-wrap">
                <section className="_background" style={{backgroundImage: "url("+bg+")"}}></section>
                <section className="_profile">
                    <img className="_profile_img" src={img} alt="profile images"/>
                    <div className="profile_cont">
                        <span className="profile_name">{name}</span>
                        <input type="mail" className="profile_email" placeholder={email}/>
                        <ul className="profile_menu">
                            <li><a href="#"><span className="icon"><i className="fas fa-comment"></i></span>My Chatroom</a></li>
                            <li><a href="#"><span className="icon"><i className="fas fa-pencil-alt"></i></span>Edit profile</a></li>
                        </ul>
                    </div> 
                </section>
            </main>
        </>
    )
}

export default Profile;