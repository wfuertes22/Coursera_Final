import Logo from "../images/Logo.svg";
const Header = () =>{
    return(
        <header>
            <img src={Logo} alt="Little Lemon Logo" className="headerLogo"></img>
        </header>
    );
}

export default Header;