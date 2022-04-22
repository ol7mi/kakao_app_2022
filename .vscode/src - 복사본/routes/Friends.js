import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import Nav from '../componets/Nav';
import FriendList from '../componets/MemberList';
import profileImage from '../data/profileImg.json';
import profiles from '../data/memberList.json';
import '../styles/Friends.scss';
import Header from '../componets/Header';

function Friends() {
    const [profile, setProfile] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const myProfile = profiles[0];

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setError(null);
                setProfile(null);
                setLoading(true);
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/users'
                );

                setProfile(response.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchUsers();
    }, []);

    if (loading) return <div>Loading..</div>;
    if (error) return <div>An error has occurred!</div>;
    if (!profile) return null;

    if (profiles.length < 10){  
        for (let i=0;i<profile.length;i++){
            profiles.push(
                {
                    id:profile[i].id,
                    name:profile[i].name,
                    email:profile[i].email,
                    lastMsg:"hello world",
                    profileMsg:profile[i].email
                }
            );
        }
    }

    

    return (
        <>
            <Header tab_name= "Friends" left_btn= "Manage" right_btn="fas fa-cog" friend_num="1"/>
            <main className="main">
                <form className="search_box">
                    <fieldset className="search_inner">
                        <i className="fas fa-search"></i>
                        <input type="search" name="search" id="search" placeholder="Find firends, chats, Plus Friends" />
                    </fieldset>
                </form>
                <section className="main-section">
                    <header><h2>My profile</h2></header>
                    <ul>
                        <FriendList
                            key={myProfile.id}
                            id={myProfile.id}
                            name={myProfile.name}
                            email={myProfile.email}
                            text={myProfile.email}
                            img={profileImage[0].img}
                            bg={profileImage[0].bg}
                        />
                    </ul>
                </section>
                <section className="main-section">
                    <header><h2>Friends</h2></header>
                    <ul>
                        {profiles.map((profileInfo, idx) => {
                            if (profileInfo.id > 1) {
                                return(
                                    <FriendList
                                        key={profileInfo.id}
                                        id={profileInfo.id}
                                        name={profileInfo.name}
                                        email={profileInfo.email}
                                        text={profileInfo.email}
                                        img={profileImage[idx].img}
                                        bg={profileImage[idx].bg}
                                    />
                                )
                            }
                            return false;
                        })}
                    </ul>
                </section>
            </main>
            <Nav />
        </>
    )
}

export default Friends;