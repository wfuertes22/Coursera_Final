const Nav = () =>{
    return(
        <nav>
            <ul>
                <a href="../"><li className="navListItem">Home</li></a>
                <a href="../About"><li className="navListItem">About</li></a>
                <a href="../Menu"><li className="navListItem">Menu</li></a>
                <a href="../Reservations"><li className="navListItem">Reservations</li></a>
                <a href="../Order_Online"><li className="navListItem">Order Online</li></a>
                <a href="../Login"><li className="navListItem">Login</li></a>
            </ul>
        </nav>
    );
}

export default Nav;