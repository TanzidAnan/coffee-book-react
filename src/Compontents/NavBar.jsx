import { Link, NavLink } from "react-router-dom";
import { getStrogeData } from "../Utlits/Stroge";
const data =getStrogeData();
console.log(data)


const NavBar = () => {
    return (
        <div className="w-10/12 mx-auto">
            <div className="navbar backdrop-blur-xl bg-red-100 px-7 shadow-lg">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 font-bold shadow">
                            <Link to='/'><li><a>Home</a></li></Link>
                            <Link to='/coffees'><li><a>Coffees</a></li></Link>
                            <Link to='/dashboard'><li><a>Dashboard {data.length}</a></li></Link>
                        </ul>
                    </div>
                    <Link to='/' className=" text-xl btn">Cook_Book</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <Link to='/'><li><a>Home</a></li></Link>
                        <NavLink to='/coffees'><li><a>Coffees</a></li></NavLink>
                        <NavLink to='/dashboard'><li><a>Dashboard <div className="-mt-2 text-lg font-bold text-green-400">{data.length}</div></a></li></NavLink>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;