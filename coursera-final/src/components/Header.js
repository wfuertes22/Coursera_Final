import Logo from "..//images/Logo.svg";
const Header = () =>{
    return(
        <header className="container">
            <a href="../"><img src={Logo} alt="Little Lemon Logo" className="headerLogo"></img></a>
        </header>
    );
}

export default Header;