import React from "react";
import ChatList from '../componets/ChatList'
import Nav from '../componets/Nav'
import Header from '../componets/Header'
import profiles from '../data/memberList.json'
import profileImgs from '../data/profileImg.json'
import '../styles/Chats.scss'

export function Chats(){
    return (
        <>
            <Header tab_name= "Chats" left_btn= "Edit" header_icon= "fas fa-caret-down" />
            <main id="Chats">
                <div className="search_box">
                    <div className="search_inner">
                        <i className="fas fa-search"></i>
                        <input type="search" name="search" id="search" placeholder="Find firends, chats, Plus Friends" />
                    </div>
                </div>
                <section className="main_section">
                    <ul>
                        {profiles.map((profile, idx)=>{
                            if(profile.id != 0){
                                return(
                                    <ChatList
                                        key = {profile.id}
                                        id = {profile.id}
                                        name = {profile.name}
                                        email = {profile.email}
                                        comment = {profile.lastMsg}
                                        img = {profileImgs[idx].img}
                                        bg = {profileImgs[idx].bg}
                                    />
                                )
                            }})
                        }
                    </ul>
                </section>
                <div className="Chat_btn">

                </div>
            </main>
            <Nav />
        </>
    )
}

export default Chats