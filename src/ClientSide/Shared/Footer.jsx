
import { FaFacebook, FaInstagram, FaPinterest, } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";


const Footer = () => {
    const iconSize = 19;
    return (
        <div className=" md:pb-[10px] bg-black text-[15px] md:text-[16px] font-custom ">
            <div className="flex justify-center items-center md:py-10 py-5 ">
                <img src="https://i.ibb.co/3sNL27c/logo.png" className="  w-[85px]  h-[15px] md:h-[20] xl:h-[25px] md:w-[85px] xl:w-[100px] " alt="" />
            </div>

            <div className="md:flex md:justify-between  grid grid-cols-2 mx-[20px] md:mx-[50px] ">
                <div >
                    <h2 className="py-3 text-white">COLLECTIONS</h2>
                    <ul className="text-[15px] text-[#646464] space-y-1 hover:text-white">
                        <li><Link to="/menCollections">Men</Link></li>
                        <li><Link to="/womens">Women</Link></li>
                        <li><Link to="/accessories">Accessories</Link></li>
                        <li><Link to="/">Prince</Link></li>
                        <li><Link to="/">Princess</Link></li>
                        <li><Link to="/allProducts">Seles</Link></li>

                    </ul>
                </div>
                <div className=" md:mt-0 ">
                    <h2 className=" py-3 text-white">MORE</h2>
                    <ul className="text-[15px] text-[#646464] hover:text-white space-y-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/store">Contact</Link></li>
                        <li><Link to="/">Blog</Link></li>

                    </ul>
                </div>
                <div >
                    <h2 className="py-3 text-white ">INFORMATION</h2>
                    <ul className="text-[15px] text-[#646464] hover:text-white space-y-1">
                        <li>Return</li>
                        <li>Shiping</li>
                        <li>Tearms and conditons</li>
                        <li>Privacy</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                <div >
                    <h2 className="py-3 text-white ">SOCIAL</h2>
                    <p className="text-[15px] text-white hover:text-white space-y-1">Stay connected</p>
                    <div className=" flex gap-x-3 pt-3 ">
                        <span style={{ fontSize: `${iconSize}px` }} > <FaFacebook className="text-white  " /></span>
                        <span style={{ fontSize: `${iconSize}px` }}  > <FaPinterest className="text-white " /></span>
                        <span style={{ fontSize: `${iconSize}px` }}  > <FaInstagram className="text-white " /></span>
                        <span style={{ fontSize: `${iconSize}px` }} > <IoLogoYoutube className="text-white " /></span>
                    </div>

                </div>


            </div>
            <p className="text-white text-center text-[14px] md:pt-8 pt-4  pb-2">Copyright © 2024 <Link className="text-slate-300" to='#'>BlackaBoij.</Link></p>

        </div>
    );
};

export default Footer;