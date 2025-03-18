// import logo from "../../public/logo-two-color-yellow.png";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo-stack.png";
import logo_mobile from "../../../assets/images/logo-yellow.png";
import { useEffect, useState } from "react";
import { ShoppingCart, ShoppingCartIcon } from "lucide-react";
import toast from "react-hot-toast";
import { Badge, IconButton } from "@mui/material";
import { useSelector } from "react-redux";

interface NavbarProps {
    expanded: boolean,
    setExpanded: (value: boolean) => void
}

const Navbar: React.FC<NavbarProps> = ({ expanded, setExpanded }) => {
    const cartItems = useSelector((state) => state.cart.items);

    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
        const token = localStorage.getItem("token");
        if (!token) {
            toast.success("Logout Successful!")
            navigate("/");
        }
    }
    const [token, setToken] = useState(null);

    useEffect(() => {
        const item: string | null = localStorage.getItem("token");
        setToken(item);
        setCount(cartItems.length);
    })
    return (
        <>
            <header className="relative py-4 md:py-6 bg-[#F9FAFB]">
                <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex-shrink-0">
                            <NavLink to="/" className="flex rounded outline-none focus:ring-0">
                                <img className="w-auto hidden sm:block sm:h-8 md:h-10 lg:h-12" src={logo} alt="Logo" />
                                <img className="w-auto h-12 sm:hidden" src={logo_mobile} alt="Logo" />
                            </NavLink>
                        </div>

                        <div className="flex lg:hidden">
                            <button onClick={() => setExpanded(!expanded)} className="text-gray-900">
                                {!expanded ? (
                                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                ) : (
                                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        {expanded && (
                            <div className="absolute top-16 left-0 w-full bg-[#F9FAFB] shadow-lg z-50">
                                <nav className="flex flex-col items-center space-y-4 py-4">
                                    <NavLink to="/about" className={({ isActive }) => `${isActive ? "text-[#155DFC]" : "text-gray-900"} text-lg`} onClick={() => setExpanded(false)}>About</NavLink>
                                    <NavLink to="/features" className={({ isActive }) => `${isActive ? "text-[#155DFC]" : "text-gray-900"} text-lg`} onClick={() => setExpanded(false)}>Features</NavLink>
                                    <NavLink to="/menu" className={({ isActive }) => `${isActive ? "text-[#155DFC]" : "text-gray-900"} text-lg`} onClick={() => setExpanded(false)}>Explore Menu</NavLink>
                                    <NavLink to="/my_orders" className={({ isActive }) => `${isActive ? "text-[#155DFC]" : "text-gray-900"} text-lg`} onClick={() => setExpanded(false)}>My Orders</NavLink>
                                    {token ?
                                        <>
                                            <NavLink to="/cart" onClick={() => setExpanded(false)} className="hover:bg-gray-100 p-2 items-center rounded-lg flex flex-row gap-2">
                                                {/* <ShoppingCart size={20} /> See Cart */}
                                                <IconButton aria-label="cart">
                                                    <Badge badgeContent={count} color="success" max={99}>
                                                        <ShoppingCartIcon />
                                                    </Badge>
                                                </IconButton>
                                                See Cart
                                            </NavLink>
                                            <button className="px-5 py-2 bg-[#000000] text-white rounded-xl" onClick={() => { setExpanded(false); logout() }}>Logout</button>
                                        </>
                                        :
                                        <>
                                            <NavLink to="/cart" onClick={() => setExpanded(false)} className="hover:bg-gray-100 p-2 items-center rounded-lg flex flex-row gap-2">
                                                {/* <ShoppingCart size={20} /> See Cart */}
                                                <IconButton aria-label="cart">
                                                    <Badge badgeContent={count} color="success" max={99}>
                                                        <ShoppingCartIcon />
                                                    </Badge>
                                                </IconButton>
                                                See Cart
                                            </NavLink>
                                            <NavLink to="/signin" className={({ isActive }) => `${isActive ? "text-[#155DFC]" : "text-gray-900"} text-lg`} onClick={() => setExpanded(false)}>Sign in</NavLink>
                                            <NavLink to="/signup" className="px-5 py-2 bg-[#000000] text-white rounded-xl" onClick={() => setExpanded(false)}>Create Account</NavLink>
                                        </>
                                    }
                                </nav>
                            </div>
                        )}

                        <div className="hidden lg:flex lg:items-center lg:space-x-8 xl:space-x-16">
                            <NavLink to="/about" onClick={() => setExpanded(false)} className={({ isActive }) => `text-base font-medium ${isActive ? "text-[#155DFC]" : "text-gray-900"} transition-all duration-200 rounded hover:text-opacity-50`}> About </NavLink>
                            <NavLink to="/features" onClick={() => setExpanded(false)} className={({ isActive }) => `text-base font-medium ${isActive ? "text-[#155DFC]" : "text-gray-900"} transition-all duration-200 rounded hover:text-opacity-50`}> Features </NavLink>
                            <NavLink to="/menu" onClick={() => setExpanded(false)} className={({ isActive }) => `text-base font-medium ${isActive ? "text-[#155DFC]" : "text-gray-900"} transition-all duration-200 rounded hover:text-opacity-50`}> Explore Menu </NavLink>
                            <NavLink to="/my_orders" onClick={() => setExpanded(false)} className={({ isActive }) => `text-base font-medium ${isActive ? "text-[#155DFC]" : "text-gray-900"} transition-all duration-200 rounded hover:text-opacity-50`}> My Orders </NavLink>
                        </div>
                        {
                            token ?
                                <div className="hidden lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
                                    <NavLink to="/cart" onClick={() => setExpanded(false)}>
                                        {/* <ShoppingCart size={20} /> */}
                                        <IconButton aria-label="cart">
                                            <Badge badgeContent={count} color="success" max={99}>
                                                <ShoppingCartIcon />
                                            </Badge>
                                        </IconButton>
                                    </NavLink>
                                    <button onClick={logout} className="px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-[#000000] border border-transparent rounded-xl hover:bg-gray-600"> Logout </button>
                                </div> :
                                <div className="hidden lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
                                    <NavLink to="/cart" onClick={() => {setExpanded(false);toast.error("Login to view cart")}}>
                                        {/* <ShoppingCart size={20} /> */}
                                        <IconButton aria-label="cart">
                                            <Badge badgeContent={count} color="success" max={99}>
                                                <ShoppingCartIcon />
                                            </Badge>
                                        </IconButton>
                                    </NavLink>
                                    <NavLink to="/signin" onClick={() => setExpanded(false)} className={({ isActive }) => `text-base font-medium ${isActive ? "text-[#155DFC]" : "text-gray-900"} transition-all duration-200 rounded hover:text-opacity-50`}> Sign in </NavLink>
                                    <NavLink to="/signup" onClick={() => setExpanded(false)} className="px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-[#000000] border border-transparent rounded-xl hover:bg-gray-600"> Create Account </NavLink>
                                </div>
                        }
                    </div>
                </div>
            </header>


        </>
    )
}

export default Navbar
