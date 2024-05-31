import { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "../../Home/NewArivalSection/NewArivalSection.css"
import { Link } from 'react-router-dom';
import { MdEuroSymbol } from "react-icons/md";
// import { FaPlus } from "react-icons/fa";

import { Toaster } from 'sonner'
import Button from '../../Utilites/Button';
// import { useCart } from '../../Utilites/CartContext';



const AllProducts = () => {
    // men products array
    const [men, setMen] = useState([]);
    const [women, setWomen] = useState([]);
    const [accessories, setAccessories] = useState([]);
    const [prince, setPrince] = useState([]);
    const [princess, setPrincess] = useState([]);
    const menProducts = "./MenProducts.json";
    const womenProducts = "./womenProducts.json";
    const accessoriesProducts = "./accessories.json";
    const princeProducts = "./prince.json";
    const princessProducts = "./princess.json";

    useEffect(() => {
        // Fetch the JSON data
        fetch(menProducts)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setMen(data);

            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, [menProducts]);
    useEffect(() => {
        // Fetch the JSON data
        fetch(womenProducts)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setWomen(data);

            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, [womenProducts]);
    useEffect(() => {
        // Fetch the JSON data
        fetch(accessoriesProducts)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setAccessories(data);

            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, [accessoriesProducts]);
    useEffect(() => {
        // Fetch the JSON data
        fetch(princeProducts)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setPrince(data);

            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, [princeProducts]);
    useEffect(() => {
        // Fetch the JSON data
        fetch(princessProducts)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setPrincess(data);

            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, [princessProducts]);

    // eslint-disable-next-line react/prop-types
    const Star = ({ rating }) => {
        const numberOfFullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const stars = Array.from({ length: numberOfFullStars }, (_, index) => (
            <span key={index} className="text-white md:text-2xl  inline-block -ml-[2px]">
                &#9733; {/* Unicode for a solid star */}
            </span>
        ));

        if (hasHalfStar) {
            stars.push(
                <span key="half" className="text-white md:text-2xl text- inline-block -ml-[2px]">
                    &#9734; {/* Unicode for an empty star */}
                </span>
            );
        }

        return <div>{stars}</div>;
    };

    // const [cart, setCart] = useState([]);

    // // Function to add a product to the cart
    // const addToCart = (product) => {
    //   // Check if the product is already in the cart
    //   const isInCart = cart.some((item) => item.id === product.id);

    //   if (!isInCart) {
    //     // Add the product to the cart
    //     const newCart = [...cart, product];
    //     setCart(newCart);

    //     // Update local storage
    //     localStorage.setItem('cart', JSON.stringify(newCart));

    //     // Show success toast
    //     toast.success(`${product.productName} is added to the cart`);
    //   } else {
    //     // Show a message or handle as needed
    //     toast.warning(`${product.productName} is already in the cart`);
    //   }
    // };
    // const { addToCart } = useCart();
    // const handleAddToCart = () => {
    //     addToCart(product);
    //     toast.success(`${product.productName} is added to the cart`);
    //   };

    return (
        <div className="md:my-[30px] ">
            <Toaster
            />
            <div className='flex flex-col'>
                <div>
                    <Tabs>
                        <div className=' font-custom text-center md:mb-[20px]'>
                            <TabList
                                className="custom-tab-list md:text-[16px] text-[12px] md:gap-6 gap-[10px] "
                            // Remove the default bottom border
                            >
                                <Tab className="custom-tab  ">Men</Tab>
                                <Tab className="custom-tab">Women</Tab>
                                <Tab className="custom-tab">Prince</Tab>
                                <Tab className="custom-tab">Princess</Tab>
                                <Tab className="custom-tab">Accessories </Tab>
                            </TabList>
                        </div>

                        <TabPanel>
                            <div className="grid md:grid-cols-3 grid-cols-2 md:gap-[25px] gap-[5px] md:mx-[50px] mx-[20px] ">
                                {men.map((product) => (
                                    <div key={product.id} className="bg-[#B7B7B7]   product-card font-custom">
                                        <Link to={`product/${product.id}`}> <img src={product.img} alt={product.productName} className="front-img" /></Link>
                                        <Link to={`product/${product.id}`}> <img src={product.backImg} alt="" className="back-img " /></Link>
                                        <button className='absolute top-0 right-0  text-white bg-[#000000] md:px-4 md:py-1 md:text-[16px] text-[12px] px-2  py-[2px]  '>New</button>
                                        <button className="details-button md:px-[20px] px-[8px] md:py-[5px] py-[2px] whitespace-nowrap ">ADD TO CART</button>
                                        <h3 className="text-center md:py-4 py-1 md:text-[22px] bg-black text-[16px] text-white">{product.productName}</h3>
                                        <p className="md:pb-3 pb-1 text-center md:text-[15px] text-[12px] bg-black text-white"> <span className='flex justify-center items-center'><MdEuroSymbol></MdEuroSymbol> {product.price}</span> </p>
                                        <div className="text-center bg-[#000000] text-white md:pb-2 pb-2 flex justify-center items-center">
                                            <span className="md:mr-2 mr-1">
                                                <Star rating={product.starRating} />
                                            </span>
                                            <span className='text-[12px] md:text-base'>
                                                {product.starRating} Reviews
                                            </span>
                                        </div>

                                    </div>
                                ))}
                            </div>
                            <p className="md:pt-[30px] pt-5  flex justify-center md:mx-[50px] mx-[20px]" ><Button buttonText="SHOW ALL"></Button></p>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid md:grid-cols-3 grid-cols-2 md:gap-[25px] gap-[5px] md:mx-[50px] mx-[20px] ">
                                {women.map((product) => (
                                    
                                    <div key={product.id} className="bg-[#B7B7B7]   product-card font-custom">
                                        <Link to={`product/${product.id}`}> <img src={product.img} alt={product.productName} className="front-img" /></Link>
                                        <Link to={`product/${product.id}`}> <img src={product.backImg} alt="" className="back-img " /></Link>
                                        <button className='absolute top-0 right-0  text-white bg-[#000000] md:px-4 md:py-1 md:text-[16px] text-[12px] px-2  py-[2px]  '>New</button>
                                        <button className="details-button md:px-[20px] px-[8px] md:py-[5px] py-[2px] whitespace-nowrap ">ADD TO CART</button>
                                        <h3 className="text-center md:py-4 py-1 md:text-[22px] bg-black text-[16px] text-white">{product.productName}</h3>
                                        <p className="md:pb-3 pb-1 text-center md:text-[15px] text-[12px] bg-black text-white"> <span className='flex justify-center items-center'><MdEuroSymbol></MdEuroSymbol> {product.price}</span> </p>
                                        <div className="text-center bg-[#000000] text-white md:pb-2 pb-2 flex justify-center items-center">
                                            <span className="md:mr-2 mr-1">
                                                <Star rating={product.starRating} />
                                            </span>
                                            <span className='text-[12px] md:text-base'>
                                                {product.starRating} Reviews
                                            </span>
                                        </div>

                                    </div>
                                ))}
                            </div>
                            <p className="md:pt-[30px] pt-5  flex justify-center md:mx-[50px] mx-[20px]" ><Button buttonText="SHOW ALL"></Button></p>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid md:grid-cols-3 grid-cols-2 md:gap-[25px] gap-[5px] md:mx-[50px] mx-[20px] ">
                                {prince.map((product) => (
                                    <div key={product.id} className="bg-[#B7B7B7]   product-card font-custom">
                                        <Link to={`product/${product.id}`}> <img src={product.img} alt={product.productName} className="front-img" /></Link>
                                        <Link to={`product/${product.id}`}> <img src={product.backImg} alt="" className="back-img " /></Link>
                                        <button className='absolute top-0 right-0  text-white bg-[#000000] md:px-4 md:py-1 md:text-[16px] text-[12px] px-2  py-[2px]  '>New</button>
                                        <button className="details-button md:px-[20px] px-[8px] md:py-[5px] py-[2px] whitespace-nowrap ">ADD TO CART</button>
                                        <h3 className="text-center md:py-4 py-1 md:text-[22px] bg-black text-[16px] text-white">{product.productName}</h3>
                                        <p className="md:pb-3 pb-1 text-center md:text-[15px] text-[12px] bg-black text-white"> <span className='flex justify-center items-center'><MdEuroSymbol></MdEuroSymbol> {product.price}</span> </p>
                                        <div className="text-center bg-[#000000] text-white md:pb-2 pb-2 flex justify-center items-center">
                                            <span className="md:mr-2 mr-1">
                                                <Star rating={product.starRating} />
                                            </span>
                                            <span className='text-[12px] md:text-base'>
                                                {product.starRating} Reviews
                                            </span>
                                        </div>

                                    </div>
                                ))}
                            </div>
                            <p className="md:pt-[30px] pt-5  flex justify-center md:mx-[50px] mx-[20px]" ><Button buttonText="SHOW ALL"></Button></p>
                        </TabPanel>

                        <TabPanel>
                            <div className="grid md:grid-cols-3 grid-cols-2 md:gap-[25px] gap-[5px] md:mx-[50px] mx-[20px] ">
                                {princess.map((product) => (
                                    <div key={product.id} className="bg-[#B7B7B7]   product-card font-custom">
                                        <Link to={`product/${product.id}`}> <img src={product.img} alt={product.productName} className="front-img" /></Link>
                                        <Link to={`product/${product.id}`}> <img src={product.backImg} alt="" className="back-img " /></Link>
                                        <button className='absolute top-0 right-0  text-white bg-[#000000] md:px-4 md:py-1 md:text-[16px] text-[12px] px-2  py-[2px]  '>New</button>
                                        <button className="details-button md:px-[20px] px-[8px] md:py-[5px] py-[2px] whitespace-nowrap ">ADD TO CART</button>
                                        <h3 className="text-center md:py-4 py-1 md:text-[22px] bg-black text-[16px] text-white">{product.productName}</h3>
                                        <p className="md:pb-3 pb-1 text-center md:text-[15px] text-[12px] bg-black text-white"> <span className='flex justify-center items-center'><MdEuroSymbol></MdEuroSymbol> {product.price}</span> </p>
                                        <div className="text-center bg-[#000000] text-white md:pb-2 pb-2 flex justify-center items-center">
                                            <span className="md:mr-2 mr-1">
                                                <Star rating={product.starRating} />
                                            </span>
                                            <span className='text-[12px] md:text-base'>
                                                {product.starRating} Reviews
                                            </span>
                                        </div>

                                    </div>
                                ))}
                            </div>
                            <p className="md:pt-[30px] pt-5  flex justify-center md:mx-[50px] mx-[20px]" ><Button buttonText="SHOW ALL"></Button></p>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid md:grid-cols-3 grid-cols-2 md:gap-[25px] gap-[5px] md:mx-[50px] mx-[20px] ">
                                {accessories.map((product) => (
                                    <div key={product.id} className="bg-[#B7B7B7]   product-card font-custom">
                                        <Link to={`product/${product.id}`}> <img src={product.img} alt={product.productName} className="front-img" /></Link>
                                        <Link to={`product/${product.id}`}> <img src={product.backImg} alt="" className="back-img " /></Link>
                                        <button className='absolute top-0 right-0  text-white bg-[#000000] md:px-4 md:py-1 md:text-[16px] text-[12px] px-2  py-[2px]  '>New</button>
                                        <button className="details-button md:px-[20px] px-[8px] md:py-[5px] py-[2px] whitespace-nowrap ">ADD TO CART</button>
                                        <h3 className="text-center md:py-4 py-1 md:text-[22px] bg-black text-[16px] text-white">{product.productName}</h3>
                                        <p className="md:pb-3 pb-1 text-center md:text-[15px] text-[12px] bg-black text-white"> <span className='flex justify-center items-center'><MdEuroSymbol></MdEuroSymbol> {product.price}</span> </p>
                                        <div className="text-center bg-[#000000] text-white md:pb-2 pb-2 flex justify-center items-center">
                                            <span className="md:mr-2 mr-1">
                                                <Star rating={product.starRating} />
                                            </span>
                                            <span className='text-[12px] md:text-base'>
                                                {product.starRating} Reviews
                                            </span>
                                        </div>

                                    </div>
                                ))}
                            </div>
                            <p className="md:pt-[30px] pt-5  flex justify-center md:mx-[50px] mx-[20px]" ><Button buttonText="SHOW ALL"></Button></p>
                        </TabPanel>


                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;
