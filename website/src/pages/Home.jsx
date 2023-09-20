import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <>
            <nav>
            <NavLink to="/">home</NavLink>
            <NavLink to="/User">User</NavLink>
            </nav>
        </>
    )
}
export default Home;
