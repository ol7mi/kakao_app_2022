import React from "react";
import Nav from '../componets/Nav'
import Header from '../componets/Header'
import '../styles/Find.scss'

export default function Find() {
    return (
        <>
            <Header tab_name= "Find" left_btn= "Edit" />
            <main id="Find">
                <ul className="find_method">
                    <li><a href="#"><i className="fas fa-address-book"></i>Find</a></li>
                    <li><a href="#"><i className="fas fa-qrcode"></i>QR Code</a></li>
                    <li><a href="#"><i className="fas fa-mobile-alt"></i>Shake</a></li>
                    <li><a href="#"><i className="fas fa-envelope"></i>Invite via SNS</a></li>
                </ul>
                <section className="recommend_section">
                    <header><h2>Recommended Frieds</h2></header>
                    <ul>
                        <li>You Have no recommended friends.</li>
                    </ul>
                </section>
            </main>
            <Nav />
        </>
    )
}

