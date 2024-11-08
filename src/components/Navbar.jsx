import { Link } from "react-router-dom";
import Button from "./Button";
import useAuth from "../hooks/useAuth";


const Navbar = () => {
    const { user, logOut } = useAuth();

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="bg-[#FEF4EA]">
            <div className="navbar max-w-[1240px] mx-auto py-4 sm:px-5 md:px-8 lg:px-16">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#213343]">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <ul className="menu menu-horizontal px-1 text-[#213343] hidden lg:flex">
                        <li><a>Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-center">
                    <Link to={'/'}><img src="/logo.png" alt="" /></Link>
                </div>
                <div className="navbar-end gap-3">
                    {
                        user ? <button onClick={handleSignOut}>Logout</button> : <Link to={'/login'}>Login</Link>
                    }
                    <Button text="Start for Free"></Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;