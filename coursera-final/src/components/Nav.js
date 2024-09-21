import {BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Main from "./Main_Components/Main";
import Booking from "../Booking";

const Nav = () =>{
    return(
        <>
            <nav className="container">
                <ul>
                    <li className="navListItem">
                        <Link to="/">Home</Link>
                    </li>
                    <a href="../About"><li className="navListItem">About</li></a>
                    <a href="../Menu"><li className="navListItem">Menu</li></a>
                    <li className="navListItem">
                        <Link to="/reservations">Reservations</Link>
                     </li>
                     <a href="../Order_Online"><li className="navListItem">Order Online</li></a>
                    <a href="../Login"><li className="navListItem">Login</li></a>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/reservations" element={<Booking />}></Route>
            </Routes>
        </>
    );
}

export default Nav;