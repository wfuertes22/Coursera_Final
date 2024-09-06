import footerLogo from "../images/Little_Lemon_Tab_Icon_Yellow.png"
const Footer = () =>{
    return(
        <footer className="container">
            <img src={footerLogo} alt="Large Little Lemon logo" className="footerLogo"></img>
            <ul className="footerList">
                <p className="footerListTitle">Helpful Links</p>
                <a href="../"><li className="footerListItem">Home</li></a>
                <a href="../About"><li className="footerListItem">About</li></a>
                <a href="../Menu"><li className="footerListItem">Menu</li></a>
                <a href="../Reservations"><li className="footerListItem">Reservations</li></a>
                <a href="../Order_Online"><li className="footerListItem">Order Online</li></a>
                <a href="../Login"><li className="footerListItem">Login</li></a>
            </ul>
            <ul className="footerList">
                <p className="footerListTitle">Contact</p>
                <li className="footerListItem">Address</li>
                <li className="footerListItem">Phone Number</li>
                <li className="footerListItem">Email</li>
            </ul>
            <ul className="footerList">
                <p className="footerListTitle">Social Media</p>
                <li className="footerListItem">Facebook</li>
                <li className="footerListItem">Instagram</li>
            </ul>
        </footer>
    );
}

export default Footer;