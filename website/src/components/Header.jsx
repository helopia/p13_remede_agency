import Logo from "../assets/images/argentBankLogo.png"
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <>
            <nav className="main-nav">
                <Link className="main-nav-logo" to={"/"}>
                    <img
                        className="main-nav-logo-image"
                        src={Logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <Link className="main-nav-item"  to={"/user"}>
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                </div>

            </nav>
        </>
    )
}
export default Header;
