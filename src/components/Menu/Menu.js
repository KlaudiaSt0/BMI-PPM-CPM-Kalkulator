import React from 'react';
import {
    HashRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet
} from 'react-router-dom';
import scale from "./scale.svg";
import person from "./person.svg";
import personRunning from "./person-running.svg";




const Menu = () => {
    return <nav className="nav">
                        <Link to="/" className="home">Kalkulatory BMI, PPM & CPM</Link>

                        <div className="link_container">
                            <Link to="/BMI" className="link_single"><img src={scale} alt="scale icon" className="menu_icon"/>Oblicz BMI</Link>

                            <Link to="/PPM" className="link_single"><img src={person} alt="person icon" className="menu_icon"/>Oblicz PPM</Link>

                            <Link to="/CPM" className="link_single"><img src={personRunning} alt="person running icon" className="menu_icon"/>Oblicz CPM</Link>
                        </div>

                    </nav>

};

export default Menu;