import React, { useEffect } from "react";
import "./Styles/Home.css"

function Home() {

    const saFIeLumina = () => {
        const bg = document.getElementById('tsparticles');

        bg.style.visibility = "visible";
    };

    useEffect(()=>{
        saFIeLumina();
    },[]);

    return(
        <div className="home">
            <div className="topbar">
                <a href="/about">ABOUT</a>
                <a href="/">HOME</a>
            </div>
        </div>
    );

}

export default Home;