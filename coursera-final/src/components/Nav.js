
/*
TODO: Find out why the webpage does not work when Router is removed even though it is unused
*/

import {BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Main from "./Main_Components/Main";
import Booking from "./Booking_Components/Booking";
import AboutPage from "./About_Component/AboutPage";
import MenuPage from "./Menu_Component/MenuPage";

const Nav = () =>{
    return(
        <>
            <nav className="container">
                <ul>
                    <li className="navListItem">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="navListItem">
                        <Link to="/about">About</Link>
                    </li>

                    {/*Try to use the poduct cards from the specials and call the list fullMenuList */}
                    <li className="navListItem">
                        <Link to="/menu">Menu</Link>
                    </li>

                    <li className="navListItem">
                        <Link to="/reservations">Reservations</Link>
                     </li>

                     <li className="navListItem">
                        <Link to="/order-online">Order Online</Link>
                     </li>
                    <li className="navListItem">
                        <Link to="Login">Login</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/reservations/*" element={<Booking />} />
            </Routes>
        </>
    );
}

export default Nav;