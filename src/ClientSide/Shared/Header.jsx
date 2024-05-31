import { HiMiniChevronUp } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";
import { HiMiniChevronDown } from "react-icons/hi2";
import { FaInstagram, FaPinterest, } from "react-icons/fa";
import { IoLogoYoutube, } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoBagOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";
import SearchButton from "../Utilites/SearchButton";
import Marquee from "react-fast-marquee";
import CartItems from "../Utilites/CartItems";
import FavItems from "../Utilites/FavItems";


const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenHovered, setIsMenHovered] = useState(false);
    const [isWomenHovered, setIsWomenHovered] = useState(false);
    const [isPrinceHovered, SetIsPrinceHovered] = useState(false);
    const [isPrincesHovered, SetIsPrincesHovered] = useState(false);
    const [isStoreHovered, SetIsStoreHovered] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [isSelesHovered, SetIsSelesHovered] = useState(false);
    const [isAccessoriesHovered, SetIsAccessoriesHovered] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isListMenuOpen, setIsListMenuOpen] = useState(false);
    const [isListMenuOpenWomen, setIsListMenuOpenWomen] = useState(false);
    const [isListMenuOpenPrince, setIsListMenuOpenPrince] = useState(false);
    const [isListMenuOpenPrincess, setIsListMenuOpenPrincess] = useState(false);
    const [cart, setCart] = useState([]);
    const [fav, setFav] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isFavOpen, setIsFavOpen] = useState(false);
    // const [listItem , setListItem] = useState(false);


    useEffect(() => {

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsSticky(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const toggleListMenu = () => {
        setIsListMenuOpen(!isListMenuOpen);
    };

    const toggleListMenuWomen = () => {
        setIsListMenuOpenWomen(!isListMenuOpenWomen);
    };
    const toggleListMenuPrince = () => {
        setIsListMenuOpenPrince(!isListMenuOpenPrince);
    };
    const toggleListMenuPrincess = () => {
        setIsListMenuOpenPrincess(!isListMenuOpenPrincess);
    };
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };
    useEffect(() => {
        // Retrieve cart items from local storage on component mount
        const storedCart = JSON.parse(localStorage.getItem('cart')) || {};
        setCart(storedCart);
    }, [cart]);

    useEffect(() => {
        // Retrieve cart items from local storage on component mount
        const storedFav = JSON.parse(localStorage.getItem('fav')) || [];
        setFav(storedFav);
    }, [fav]);

    const iconSize = 19;


    // Function to toggle the cart visibility
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    // Function to close the cart
    const closeCart = () => {
        setIsCartOpen(false);
    };
    const toggleFav = () => {
        setIsFavOpen(!isCartOpen);
    };

    // Function to close the cart
    const closeFav = () => {
        setIsFavOpen(false);
    };

    return (
        <nav>

            {/* Header Section */}
            <div className="md:block hidden bg-black  w-full">
                <div className="w-full flex justify-center">
                    <div className="max-w-xl">
                        <Marquee className="text-center" delay={2}>
                            <p className="text-[#b1b1b1] py-2">Up to 60% OFF on selected items. With an additional 20%, code: BLACK WINTER</p>
                        </Marquee>
                    </div>
                </div>
                <div
                    className=""
                    style={{
                        // backgroundImage: "url('https://i.ibb.co/SP1rhKQ/Banner.png')",
                        // backgroundSize: 'cover',
                        // backgroundPosition: 'center',
                        // backgroundRepeat: "no-repeat",
                        // height: '100vh',
                        position: 'relative', // Add this line
                        transition: 'border 0.5s ease-in-out', // Add this line for smooth transition
                        // borderTop: isSticky ? '1px solid #383838' : 'none',
                        // borderBottom: isSticky ? '1px solid #383838' : 'none',
                        // zIndex: isSticky ? '9999' : '50', // Add this line
                        zIndex: '50', // Add this line

                        backgroundColor: isMenHovered || isWomenHovered || isPrinceHovered || isPrincesHovered || isStoreHovered || isSelesHovered || isAccessoriesHovered ? 'black' : 'black', // Added this line

                    }}
                >
                    <div className={`pt-[20px]   w-full ${isSticky ? "fixed top-0" : ""} bg-black text-white transition-colors duration-500 ease-in-out `}>

                        <div className={`grid grid-cols-3 justify-between items-center px-[50px] pb-[20px]`}>

                            {/* Search button on the left */}
                            <div className="col-span-1">
                                <SearchButton></SearchButton>
                            </div>

                            {/* Logo in the middle */}
                            <div className="col-span-1 flex items-center justify-center">
                                <Link to="/">
                                    <img src="https://i.ibb.co/3sNL27c/logo.png" className="sm:w-[85px] xl:w-[100px]" alt="" />
                                </Link>
                            </div>

                            {/* Icons on the right */}
                            <div className="col-span-1 flex justify-end gap-x-3 relative">
                                <Link>
                                    <span style={{ fontSize: `${iconSize}px` }} > <FaRegUser className="text-white" /></span>
                                </Link>
                                <Link onClick={toggleFav}>
                                    <span style={{ fontSize: `${iconSize}px` }} > <IoBagOutline className="text-white" /><span className="text-[9px] font-bold absolute top-[-3px] text-black px-[4px] bg-white rounded-full right-[25px]">{fav.length}</span></span>
                                </Link>
                                <Link onClick={toggleCart}>
                                    <span style={{ fontSize: `${iconSize}px` }} > <AiOutlineShoppingCart className="text-white" /><span className="text-[9px] font-bold absolute top-[-4px] text-black px-[4px] bg-white rounded-full right-[-3px]">{cart.length}</span></span>
                                </Link>

                            </div>
                            {isCartOpen && <CartItems cart={cart} closeCart={closeCart} />}
                            {isFavOpen && <FavItems fav={fav} close={closeFav} />}
                        </div>

                        {/* desktop  list items */}
                        <div
                            className={`flex   justify-center   list-none font-custom text-[#b1b1b1]  border-b border-t border-[#383838] bg-black `}

                        >
                            <Link to="/menCollections" className={`relative text-white py-[10px] px-[15px] text-[15px] border-b-2 border-transparent  group  ${isMenHovered ? 'text-white border-b-2 border-white' : ''}`}
                                onMouseEnter={() => setIsMenHovered(true)}
                                onMouseLeave={() => setIsMenHovered(false)}
                            >
                                MEN

                                <Fade direction="left" >
                                    {/* mens list items */}
                                    <ul className={`absolute pl-6 pr-[250px] text-[12px] top-[46px] whitespace-nowrap   ${isMenHovered ? 'block bg-black' : 'hidden'}`}>
                                        <ul className="py-[15px] font-semibold"><Link to="/menCollections">MENS NEW ARRIVALS</Link>
                                        </ul>
                                        <li className="pt-[5px]">
                                            <Link to="/tees">TEES</Link>
                                        </li>
                                        <li className="pt-[5px]">
                                            <Link to="/hoodiesAndSweeters">HOODIES AND SWEATERS</Link>
                                        </li>

                                        <li className="pt-[5px]">
                                            <Link to="/pants">PANTS</Link>
                                        </li>
                                        <li className="pt-[5px]">
                                            <Link to="/outwear">OUTWEAR</Link>
                                        </li>
                                        <li className="pt-[5px]" ><Link to="#">SHOES</Link></li>
                                        <li className="pt-[15px] pb-10 font-semibold">
                                            <Link to="/accessories">ACCESORIES</Link>
                                        </li>
                                    </ul>

                                </Fade>


                            </Link>
                            <Link to="/womens" className={` text-white relative px-[15px] py-[10px] text-[15px]  border-b-2-transparent  group  ${isWomenHovered ? 'text-white border-b-2 ' : ''}`}
                                onMouseEnter={() => setIsWomenHovered(true)}
                                onMouseLeave={() => setIsWomenHovered(false)}
                            >
                                WOMEN

                                <Fade direction="left">
                                    <ul className={`absolute pl-6 pr-[250px] text-[12px] top-[46px] whitespace-nowrap   ${isWomenHovered ? 'block bg-black' : 'hidden'}`}>
                                        <ul className="py-[15px] font-semibold"><Link to="/womens">WOMEN NEW ARRIVALS</Link></ul>
                                        <li className="pt-[5px]"><Link to="/womenTees">TEES</Link></li>
                                        <li className="pt-[5px]"><Link to="/womensHoodies">HOODIES AND SWEATERS</Link></li>
                                        <li className="pt-[5px]"><Link to="/womenPants">PANTS</Link></li>
                                        <li className="pt-[5px]"><Link to="/womenOutwear">OUTWEAR</Link></li>
                                        <li className="pt-[5px]" ><Link to="#">SHOES</Link></li>
                                        <li className="pt-[15px] pb-10 font-semibold"><Link to="/accessories">ACCESORIES</Link></li>
                                    </ul>
                                </Fade>


                            </Link>
                            <Link to="/princeCollections" className={`relative text-white px-[15px] py-[10px] text-[15px]  border-b-2-transparent group  ${isPrinceHovered ? 'text-white border-b-2 ' : ''}`}
                                onMouseEnter={() => SetIsPrinceHovered(true)}
                                onMouseLeave={() => SetIsPrinceHovered(false)}
                            >
                                PRINCE

                                <Fade direction="left">
                                    <ul className={`absolute pl-6 pr-[250px] text-[12px] top-[46px] whitespace-nowrap   ${isPrinceHovered ? 'block bg-black' : 'hidden'}`}>
                                        <ul className="py-[15px] font-semibold"><Link to="/princeCollections">PRINCE NEW ARRIVALS</Link></ul>
                                        <li className="pt-[5px]"><Link to="/princeTeesCollections">TEES</Link></li>
                                        <li className="pt-[5px]"><Link to="/princeHoodiesAndSweeters">HOODIES AND SWEATERS</Link></li>
                                        <li className="pt-[5px]"><Link to="/princePants">PANTS</Link></li>
                                        <li className="pt-[5px]"><Link to="/princeOutwear">OUTWEAR</Link></li>
                                        <li className="pt-[5px]" ><Link to="#">SHOES</Link></li>
                                        <li className="pt-[15px] pb-10 font-semibold"><Link to="/accessories">ACCESORIES</Link></li>
                                    </ul>
                                </Fade>


                            </Link>
                            <Link to="/princessCollections" className={`relative text-white px-[15px] py-[10px] text-[15px] border-b-2-transparent group  ${isPrincesHovered ? 'text-white  border-b-2' : ''}`}
                                onMouseEnter={() => SetIsPrincesHovered(true)}
                                onMouseLeave={() => SetIsPrincesHovered(false)}
                            >
                                PRINCESS

                                <Fade direction="left">
                                    <ul className={`absolute pl-6 pr-[250px] text-[12px] top-[46px] whitespace-nowrap   ${isPrincesHovered ? 'block bg-black' : 'hidden'}`}>
                                        <ul className="py-[15px] font-semibold"><Link to="/princessCollections">PRINCESS NEW ARRIVALS</Link></ul>
                                        <li className="pt-[5px]"><Link to="/princessTees">TEES</Link></li>
                                        <li className="pt-[5px]"><Link to="/princessHoodies">HOODIES AND SWEATERS</Link></li>
                                        <li className="pt-[5px]"><Link to="/princessPants">PANTS</Link></li>
                                        <li className="pt-[5px]"><Link to="/princessOutwear">OUTWEAR</Link></li>
                                        <li className="pt-[5px]" ><Link to="#">SHOES</Link></li>
                                        <li className="pt-[15px] pb-10 font-semibold"><Link to="/accessories">ACCESORIES</Link></li>
                                    </ul>
                                </Fade>
                            </Link>

                            {/* <Link to="/allProducts">
                                <li className={`relative px-[15px] py-[10px] text-[15px] border-b-2-transparent group  ${isSelesHovered ? 'text-white  border-b-2' : ''}`}
                                    onMouseEnter={() => SetIsSelesHovered(true)}
                                    onMouseLeave={() => SetIsSelesHovered(false)}
                                >SALES</li>
                            </Link> */}
                            <Link to="/store">
                                <li className={`relative px-[15px] py-[10px] text-[15px] border-b-2-transparent group  ${isStoreHovered ? 'text-white  border-b-2' : ''}`}
                                    onMouseEnter={() => SetIsStoreHovered(true)}
                                    onMouseLeave={() => SetIsStoreHovered(false)}
                                >STORE</li>
                            </Link>
                            <Link to="/accessories">
                                <li className={`relative px-[15px] py-[10px] text-[15px] border-b-2-transparent group ${isAccessoriesHovered ? 'text-white  border-b-2' : ''}`}
                                    onMouseEnter={() => SetIsAccessoriesHovered(true)}
                                    onMouseLeave={() => SetIsAccessoriesHovered(false)}
                                >ACCESSORIES</li>
                            </Link>
                            <Link to="/signIn">
                                <li className={`relative px-[15px] py-[10px] text-[15px] border-b-2-transparent group ${isAccessoriesHovered ? 'text-white  border-b-2' : ''}`}
                                    onMouseEnter={() => SetIsAccessoriesHovered(true)}
                                    onMouseLeave={() => SetIsAccessoriesHovered(false)}
                                >Sign In</li>
                            </Link>
                            <Link to="/signUp">
                                <li className={`relative px-[15px] py-[10px] text-[15px] border-b-2-transparent group ${isAccessoriesHovered ? 'text-white  border-b-2' : ''}`}
                                    onMouseEnter={() => SetIsAccessoriesHovered(true)}
                                    onMouseLeave={() => SetIsAccessoriesHovered(false)}
                                >Sign Up</li>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile menu */}
            <div className={`header md:hidden  block w-full ${isSticky ? "fixed top-0 z-50" : ""} bg-black text-white transition-colors duration-500 ease-in-out z-50 `}>
                <div className={`grid grid-cols-3 items-center z-50  py-[18px]   px-[20px] font-custom  relative ${isMobileMenuOpen ? "bg-black z-100  " : ""}  `}>
                    <div className="   flex  relative">
                        <Link className="pr-[6px]">
                            <span style={{ fontSize: `18px` }} > <FaRegUser className="text-white " /></span>
                        </Link>
                        <Link className="pr-[6px] relative" onClick={toggleFav}>
                            <span style={{ fontSize: `18px` }} > <IoBagOutline className="text-white " /><span className="text-[9px] font-bold absolute md:top-[-3px] top-[-4px] text-black px-[4px] bg-white rounded-full right-[1px]">{fav.length}</span></span>
                        </Link>
                        <Link className="relative" onClick={toggleCart}>
                            <span style={{ fontSize: `18px` }} > <AiOutlineShoppingCart className="text-white " /><span className="text-[9px] font-bold absolute top-[-4px] text-black px-[4px] bg-white rounded-full right-[-3px]">{cart.length}</span></span>
                        </Link>

                    </div>
                    {isFavOpen && <FavItems fav={fav} close={closeFav} />}
                    {isCartOpen && <CartItems cart={cart} closeCart={closeCart} />}

                    <div className="flex items-center justify-center">
                        <Link to="/"> <img src="https://i.ibb.co/3sNL27c/logo.png" className="w-[85px] h-[15px] " alt="" /></Link>
                    </div>
                    <div className="menu-icon flex items-center justify-end">
                        {isMobileMenuOpen ? (
                            <HiMiniXMark onClick={toggleMobileMenu} className=" text-[20px] text-white"></HiMiniXMark>
                        ) : (
                            <HiBars3BottomRight onClick={toggleMobileMenu} className=" text-[20px] text-white"></HiBars3BottomRight>
                        )}
                    </div>
                    {isMobileMenuOpen && (
                        <div className={`bg-black  text-white absolute left-0 top-10 w-full  h-screen px-5 `}>
                            <ul className="flex flex-col   py-4 space-y-4">
                                <li>
                                    <div
                                        className={`flex justify-between items-center `}
                                    >
                                        <p>MEN</p>
                                        <p>{isListMenuOpen ? <HiMiniChevronUp onClick={toggleListMenu} className=" text-[20px] text-white" /> : <HiMiniChevronDown onClick={toggleListMenu} className=" text-[20px] text-white" />}</p>
                                    </div>
                                    {
                                        isListMenuOpen ? <ul className={`pl-[5px] text-[11px] space-y-[5px] `}>
                                            <li className="mt-[10px]" ><Link onClick={closeMobileMenu} to='/menCollections'>NEW COLLECTIONS</Link></li>
                                            <li><Link onClick={closeMobileMenu} to='/tees'>TEES</Link></li>
                                            <li><Link onClick={closeMobileMenu} to='/hoodiesAndSweeters'>HOODIES AND SWEATERS</Link></li>
                                            <li><Link onClick={closeMobileMenu} to='/pants'>PANTS</Link></li>
                                            <li><Link onClick={closeMobileMenu} to='/outwear'>OUTWEARS</Link></li>
                                            <li><Link onClick={closeMobileMenu} to='/'>SHOES</Link></li>
                                            <li><Link onClick={closeMobileMenu} to='/accessories'>ACCESSORIES</Link></li>
                                        </ul> : ""
                                    }
                                </li>
                                <li>
                                    <div className={`flex justify-between items-center `}>
                                        <p>WOMEN</p>
                                        <p>{isListMenuOpenWomen ? <HiMiniChevronUp onClick={toggleListMenuWomen} className=" text-[20px] text-white" /> : <HiMiniChevronDown onClick={toggleListMenuWomen} className=" text-[20px] text-white" />}</p>
                                    </div>
                                    {
                                        isListMenuOpenWomen ? <ul className={`pl-[5px] text-[11px] space-y-[5px] `}>
                                            <li className="mt-[10px]"><Link onClick={closeMobileMenu} to='/womens'>NEW COLLECTIONS</Link></li>
                                            <li><Link onClick={closeMobileMenu} to='/womenTees'>TEES</Link></li>
                                            <li><Link onClick={closeMobileMenu} to='/womensHoodies'>HOODIES AND SWEATERS</Link></li>
                                            <li><Link onClick={closeMobileMenu} to='/womenPants'>PANTS</Link></li>
                                            <li><Link onClick={closeMobileMenu} to='/womenOutwear'>OUTWEARS</Link></li>
                                            <li><Link onClick={closeMobileMenu} to='/'>SHOES</Link></li>
                                            <li><Link onClick={closeMobileMenu} to='/accessories'>ACCESSORIES</Link></li>
                                        </ul> : ""
                                    }
                                </li>
                                <li>
                                    <div className={`flex justify-between items-center `}>
                                        <p>PRINCE</p>
                                        <p>{isListMenuOpenPrince ? <HiMiniChevronUp onClick={toggleListMenuPrince} className=" text-[20px] text-white" /> : <HiMiniChevronDown onClick={toggleListMenuPrince} className=" text-[20px] text-white" />}</p>
                                    </div>
                                    {
                                        isListMenuOpenPrince ? <ul className={`pl-[5px] text-[11px] space-y-[5px] `}>
                                            <li className="mt-[10px]"><Link onClick={closeMobileMenu} to='/princeCollections'>NEW COLLECTIONS</Link></li>
                                            <li><Link onClick={closeMobileMenu} to='/princeTeesCollections'>TEES</Link></li>
                                            <li><Link onClick={closeMobileMenu} to='/princeHoodiesAndSweeters'>HOODIES AND SWEATERS</Link></li>
                                            <li><Link onClick={closeMobileMenu} to='/princePants'>PANTS</Link></li>
                                            <li><Link onClick={closeMobileMenu} to='/princeOutwear'>OUTWEARS</Link></li>
                                            <li><Link onClick={closeMobileMenu} to='/'>SHOES</Link></li>
                                            <li><Link onClick={closeMobileMenu} to='/accessories'>ACCESSORIES</Link></li>
                                        </ul> : ""
                                    }
                                </li>
                                <li>
                                    <div className={`flex justify-between items-center `}>
                                        <p>PRINCESS</p>
                                        <p>{isListMenuOpenPrincess ? <HiMiniChevronUp onClick={toggleListMenuPrincess} className=" text-[20px] text-white" /> : <HiMiniChevronDown onClick={toggleListMenuPrincess} className=" text-[20px] text-white" />}</p>
                                    </div>
                                    {
                                        isListMenuOpenPrincess ? <ul className={`pl-[5px] text-[11px] space-y-[5px] `}>
                                            <li className="mt-[10px]"><Link onClick={closeMobileMenu} to='/princessCollections'>NEW COLLECTIONS</Link></li>
                                            <li><Link onClick={closeMobileMenu} to='/princessTees'>TEES</Link></li>
                                            <li><Link onClick={closeMobileMenu} to='/princessHoodies'>HOODIES AND SWEATERS</Link></li>
                                            <li><Link onClick={closeMobileMenu} to='/princessPants'>PANTS</Link></li>
                                            <li><Link onClick={closeMobileMenu} to='/princessOutwear'>OUTWEARS</Link></li>
                                            <li><Link onClick={closeMobileMenu} to='/'>SHOES</Link></li>
                                            <li><Link onClick={closeMobileMenu} to='/accessories'>ACCESSORIES</Link></li>
                                        </ul> : ""
                                    }
                                </li>

                                <li className="relative">
                                    <Link to="/allProducts" className="text-white">SALES</Link>
                                </li>
                                <li className="relative">
                                    <Link to="/store" className="text-white">STORE</Link>
                                </li>
                                <li className="relative">
                                    <Link to="/accessories" className="text-white">ACCESSORIES</Link>
                                </li>

                            </ul>
                            {/* footer icons */}
                            <div className=" flex justify-center items-center space-x-5 pt-[20px]  ">
                                <span style={{ fontSize: `${iconSize}px` }} > <FaFacebook className="text-white  " /></span>
                                <span style={{ fontSize: `${iconSize}px` }}  > <FaPinterest className="text-white " /></span>
                                <span style={{ fontSize: `${iconSize}px` }}  > <FaInstagram className="text-white " /></span>
                                <span style={{ fontSize: `${iconSize}px` }} > <IoLogoYoutube className="text-white " /></span>

                            </div>
                        </div>
                    )}

                </div>
            </div>
        </nav>
    );
};

export default Header;
