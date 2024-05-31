
import { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./NewArivalSection.css"
import { Link } from 'react-router-dom';
import { MdEuroSymbol } from "react-icons/md";
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import { Fade } from 'react-awesome-reveal';
import { Toaster, toast } from 'sonner'
import Button from '../../Utilites/Button';
import { useCart } from '../../Utilites/CartContext';


const NewArivalSection = () => {
    const [men, setMen] = useState([]);
    const [women, setWomen] = useState([]);
    const [prince, setPrince] = useState([]);
    const [princess, setPrincess] = useState([]);
    const [accessories, setAccessories] = useState([]);

    const { addToCart, addToFav, fav } = useCart();
    const [isHovered, setIsHovered] = useState(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const [sizeByProduct, setSizeByProduct] = useState({});
    const [colorByProduct, setColorByProduct] = useState({});
    const [selectedSize, setSelectedSize] = useState({});
    const [selectedColor, setSelectedColor] = useState({});

    // const menProducts = "./MenProducts.json";
    // const womenProducts = "./womenProducts.json";
    const accessoriesProducts = "./accessories.json";
    // const princeProducts = "./prince.json";
    const princeProducts = "./HotSaleMenProducts.json";
    // const princessProducts = "./princess.json";
    const princessProducts = "./HotSalewomenProducts.json";

    const menProducts = "./HotSaleMenProducts.json";
    const womenProducts = "./HotSalewomenProducts.json";

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
                console.log('Men new arraivals', data)

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
                console.log('women new arrivals', data);

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
            <span key={index} className="text-white md:text-2xl  text-[12px] inline-block -ml-[2px]">
                &#9733; {/* Unicode for a solid star */}
            </span>
        ));

        if (hasHalfStar) {
            stars.push(
                <span key="half" className="text-white md:text-2xl text-[12px] inline-block -ml-[2px]">
                    &#9734; {/* Unicode for an empty star */}
                </span>
            );
        }

        return <div>{stars}</div>;
    };

    const handleMouseEnter = (productId) => {
        setIsHovered(productId);
    };

    const handleMouseLeave = () => {
        setIsHovered(null);
    };

    const handleSizeChange = (productId, size) => {
        setSizeByProduct((prevSizeByProduct) => ({
            ...prevSizeByProduct,
            [productId]: size,
        }));

        // Update selectedSize state
        setSelectedSize((prevSelectedSize) => ({
            ...prevSelectedSize,
            [productId]: size,
        }));
    };

    const handleColorChange = (productId, color) => {
        setColorByProduct((prevColorByProduct) => ({
            ...prevColorByProduct,
            [productId]: color,
        }));

        // Update selectedColor state
        setSelectedColor((prevSelectedColor) => ({
            ...prevSelectedColor,
            [productId]: color,
        }));
    };
    // const isAddToCartEnabled = selectedSize && selectedColor;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(true);

            // Set a timeout to clear the scrolling state after a short delay
            setTimeout(() => {
                setIsScrolling(false);
            }, 500); // Adjust the delay as needed
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const generateUniqueId = () => {
        const randomPart = Math.floor(Math.random() * 90000000000000) + 10000000000000; // 14-digit random number
        return randomPart.toString();
    };

    // async function logMovies() {
    //     const response = await fetch("http://localhost:9000/v1/products/?sortBy=name&limit=10&page=0&max=500&min=0&categoryId=1");
    //     const movies = await response.json();
    //     console.log(movies);
    //   }
    //   let movies = logMovies.data
    //   movies.map(movie => console.log(movie.name))
    //   console.log(movies.data.name);
    return (
        <div className="md:section-gap pt-[50px] ">
            <Toaster />
            <div className='flex flex-col'>
                <h1 className='mb-[10px] md:mb-[20px] text-center font-custom font-bold'>Just Dropped</h1>
                <div>
                    <Tabs>
                        <div className=' mb-[20px] md:mb-[50px] font-custom text-center'>
                            <TabList className="custom-tab-list md:text-[16px] text-[12px] md:gap-6 gap-[10px] ">
                                <Tab className="custom-tab  ">Men</Tab>
                                <Tab className="custom-tab">Women</Tab>
                                <Tab className="custom-tab">Prince</Tab>
                                <Tab className="custom-tab">Princess</Tab>
                                <Tab className="custom-tab">Accessories</Tab>
                            </TabList>
                        </div>

                        <TabPanel>
                            <div className=" relative grid md:grid-cols-3 grid-cols-2 md:gap-[25px] gap-[5px] md:mx-[50px] mx-[20px] ">
                                {men.map((product) => (

                                    <div key={product.id} className={`bg-[#B7B7B7] product-card font-custom ${isHovered === product.id && !isScrolling ? 'fade' : ''}`} onMouseEnter={() => handleMouseEnter(product.id)} onMouseLeave={handleMouseLeave}>
                                        <Link to={`productMen/${product.id}`}> <img src={product.img} alt={product.productName} className="front-img" /></Link>
                                        <Link to={`productMen/${product.id}`}> <img src={product.backImg} alt="" className="back-img " /></Link>
                                        <button className='absolute top-0 right-0  text-white bg-[#000000] md:px-4 md:py-1 md:text-[16px] text-[12px] px-2  py-[2px]  '>New</button>
                                        <button
                                            onClick={() => { 
                                                const uniqueId = generateUniqueId();
                                                { addToFav({ mainId : product.id ,
                                                    id : uniqueId ,
                                                    name: product.productName,
                                                    img: product.img,
                                                    price: product.price,
                                                    size: "S" ,
                                                    color: "Black" ,
                                                    route : "productMen"}); }
                                                 }}
                                            style={{ fontSize: '30px', color: fav.some((item) => item.mainId === product.id) ? 'red' : 'black' }}
                                            className='absolute top-0 left-0 text-white md:px-4 md:py-1 md:text-[20px] text-[12px] px-2 py-[2px]'
                                        >
                                            {fav.some((item) => item.mainId === product.id) ? <IoIosHeart /> : <IoIosHeartEmpty />}
                                        </button>

                                        <div  className="details-button md:flex justify-center items-center flex-col hidden md:block w-full bg-white p-3">
                                            <Fade direction=''>
                                                <div className='md:space-x-3 space-x-[2px] space-y-1 md:space-y-0'>
                                                    <button
                                                        className={`size-button ${sizeByProduct[product.id] === 'S' ? 'bg-gray-500 text-white' : ''}`}
                                                        onClick={() => handleSizeChange(product.id, 'S')}
                                                    >
                                                        S
                                                    </button>
                                                    <button
                                                        className={`size-button ${sizeByProduct[product.id] === 'M' ? 'bg-gray-500 text-white' : ''}`}
                                                        onClick={() => handleSizeChange(product.id, 'M')}
                                                    >
                                                        M
                                                    </button>
                                                    <button
                                                        className={`size-button ${sizeByProduct[product.id] === 'L' ? 'bg-gray-500 text-white' : ''}`}
                                                        onClick={() => handleSizeChange(product.id, 'L')}
                                                    >
                                                        L
                                                    </button>
                                                    <button
                                                        className={`size-button ${sizeByProduct[product.id] === 'XL' ? 'bg-gray-500 text-white' : ''}`}
                                                        onClick={() => handleSizeChange(product.id, 'XL')}
                                                    >
                                                        XL
                                                    </button>
                                                    <button
                                                        className={`size-button ${sizeByProduct[product.id] === '2XL' ? 'bg-gray-500 text-white' : ''}`}
                                                        onClick={() => handleSizeChange(product.id, '2XL')}
                                                    >
                                                        2XL
                                                    </button>

                                                </div>
                                            </Fade>
                                            <div className='md:pt-3 pt-1 md:space-x-[7px] md:flex-none flex    space-x-[2px]'>
                                                <button
                                                    className={`size-button ${colorByProduct[product.id] === 'Black' ? 'bg-gray-500 text-white' : ''}`}
                                                    onClick={() => handleColorChange(product.id, 'Black')}
                                                >
                                                    Black
                                                </button>
                                                <button
                                                    className={`size-button ${colorByProduct[product.id] === 'White' ? 'bg-gray-500 text-white' : ''}`}
                                                    onClick={() => handleColorChange(product.id, 'White')}
                                                >
                                                    White
                                                </button>
                                                <button
                                                    className={`size-button md:text-[14px] text-[12px] mt-2 md:mt-[0px] ${selectedSize[product.id] && selectedColor[product.id] ? 'bg-gray-500 text-white' : 'bg-gray-500 text-white'}`}
                                                    onClick={() => {
                                                        if (selectedSize[product.id] && selectedColor[product.id]) {

                                                            // Generate a 14-digit unique ID
                                                            const uniqueId = generateUniqueId();
                                                            // Both size and color are selected, call addToCart
                                                            addToCart({
                                                                mainId : product.id ,
                                                                id: uniqueId,
                                                                name: product.productName,
                                                                img: product.img,
                                                                price: product.price,
                                                                size: selectedSize[product.id],
                                                                color: selectedColor[product.id],
                                                            });
                                                            // Optionally, you can clear the selectedSize and selectedColor state after adding to cart
                                                            setSelectedSize((prevSelectedSize) => ({
                                                                ...prevSelectedSize,
                                                                [product.id]: null,
                                                            }));
                                                            setSelectedColor((prevSelectedColor) => ({
                                                                ...prevSelectedColor,
                                                                [product.id]: null,
                                                            }));
                                                        } else {
                                                            // Display a message or handle the case when size or color is not selected
                                                            // You may use toast or any other method to inform the user
                                                            toast.error('Please select both size and color.');                                                       
                                                                                                                
                                                        }

                                                    }}
                                                >
                                                    ADD TO CART
                                                </button>

                                            </div>
                                        </div>
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
                            <p className="md:pt-[50px] pt-5  flex justify-center md:mx-[50px] mx-[20px]" ><Button buttonText="SHOW ALL"></Button></p>
                        </TabPanel>
                        <TabPanel>
                            <div className=" relative grid md:grid-cols-3 grid-cols-2 md:gap-[25px] gap-[5px] md:mx-[50px] mx-[20px] ">
                                {women.map((product) => (

                                    <div key={product.id} className={`bg-[#B7B7B7] product-card font-custom ${isHovered === product.id && !isScrolling ? 'fade' : ''}`} onMouseEnter={() => handleMouseEnter(product.id)} onMouseLeave={handleMouseLeave}>
                                        <Link to={`productWomen/${product.id}`}> <img src={product.img} alt={product.productName} className="front-img" /></Link>
                                        <Link to={`productWomen/${product.id}`}> <img src={product.backImg} alt="" className="back-img " /></Link>
                                        <button className='absolute top-0 right-0  text-white bg-[#000000] md:px-4 md:py-1 md:text-[16px] text-[12px] px-2  py-[2px]  '>New</button>
                                        <button
                                            onClick={() => { 
                                                const uniqueId = generateUniqueId();
                                                { addToFav({ mainId : product.id ,
                                                    id : uniqueId ,
                                                    name: product.productName,
                                                    img: product.img,
                                                    price: product.price,
                                                    size: "S" ,
                                                    color: "Black" ,
                                                    route : "women"}); }
                                                 }}
                                            style={{ fontSize: '30px', color: fav.some((item) => item.mainId === product.id) ? 'red' : 'black' }}
                                            className='absolute top-0 left-0 text-white md:px-4 md:py-1 md:text-[20px] text-[12px] px-2 py-[2px]'
                                        >
                                            {fav.some((item) => item.mainId === product.id) ? <IoIosHeart /> : <IoIosHeartEmpty />}
                                        </button>

                                        <div className="details-button md:flex justify-center items-center flex-col hidden md:block w-full bg-white p-3">
                                            <Fade direction=''>
                                                <div className='space-x-3'>
                                                    <button
                                                        className={`size-button ${sizeByProduct[product.id] === 'S' ? 'bg-gray-500 text-white' : ''}`}
                                                        onClick={() => handleSizeChange(product.id, 'S')}
                                                    >
                                                        S
                                                    </button>
                                                    <button
                                                        className={`size-button ${sizeByProduct[product.id] === 'M' ? 'bg-gray-500 text-white' : ''}`}
                                                        onClick={() => handleSizeChange(product.id, 'M')}
                                                    >
                                                        M
                                                    </button>
                                                    <button
                                                        className={`size-button ${sizeByProduct[product.id] === 'L' ? 'bg-gray-500 text-white' : ''}`}
                                                        onClick={() => handleSizeChange(product.id, 'L')}
                                                    >
                                                        L
                                                    </button>
                                                    <button
                                                        className={`size-button ${sizeByProduct[product.id] === 'XL' ? 'bg-gray-500 text-white' : ''}`}
                                                        onClick={() => handleSizeChange(product.id, 'XL')}
                                                    >
                                                        XL
                                                    </button>
                                                    <button
                                                        className={`size-button ${sizeByProduct[product.id] === '2XL' ? 'bg-gray-500 text-white' : ''}`}
                                                        onClick={() => handleSizeChange(product.id, '2XL')}
                                                    >
                                                        2XL
                                                    </button>

                                                </div>
                                            </Fade>
                                            <div className='pt-3 space-x-[7px]'>
                                                <button
                                                    className={`size-button ${colorByProduct[product.id] === 'Black' ? 'bg-gray-500 text-white' : ''}`}
                                                    onClick={() => handleColorChange(product.id, 'Black')}
                                                >
                                                    Black
                                                </button>
                                                <button
                                                    className={`size-button ${colorByProduct[product.id] === 'White' ? 'bg-gray-500 text-white' : ''}`}
                                                    onClick={() => handleColorChange(product.id, 'White')}
                                                >
                                                    White
                                                </button>
                                                <button
                                                    className={`size-button ${selectedSize[product.id] && selectedColor[product.id] ? 'bg-gray-500 text-white' : 'bg-gray-500 text-white'}`}
                                                    onClick={() => {
                                                        if (selectedSize[product.id] && selectedColor[product.id]) {

                                                            // Generate a 14-digit unique ID
                                                            const uniqueId = generateUniqueId();
                                                            // Both size and color are selected, call addToCart
                                                            addToCart({
                                                                mainId : product.id ,
                                                                id: uniqueId,
                                                                name: product.productName,
                                                                img: product.img,
                                                                price: product.price,
                                                                size: selectedSize[product.id],
                                                                color: selectedColor[product.id],
                                                            });
                                                            // Optionally, you can clear the selectedSize and selectedColor state after adding to cart
                                                            setSelectedSize((prevSelectedSize) => ({
                                                                ...prevSelectedSize,
                                                                [product.id]: null,
                                                            }));
                                                            setSelectedColor((prevSelectedColor) => ({
                                                                ...prevSelectedColor,
                                                                [product.id]: null,
                                                            }));
                                                        } else {
                                                            // Display a message or handle the case when size or color is not selected
                                                            // You may use toast or any other method to inform the user
                                                            toast.error('Please select both size and color.');                                                       
                                                                                                                
                                                        }

                                                    }}
                                                >
                                                    ADD TO CART
                                                </button>

                                            </div>
                                        </div>
                                        <h3 className="text-center md:py-4 py-1 md:text-[22px] bg-black text-[16px] text-white">{product.productName}</h3>
                                        <div className="text-center bg-[#000000] text-white  md:pb-2 pb-2 flex justify-center items-center">
                                            <span className="md:mr-2 mr-1 ">
                                                <Star rating={product.starRating} />
                                            </span>
                                            <span className='text-[12px] md:text-base'>
                                                {product.starRating} Reviews
                                            </span>
                                        </div>
                                        <p className="md:pb-3 pb-1 text-center md:text-[15px] text-[12px] bg-black text-white"> <span className='flex justify-center items-center'><MdEuroSymbol></MdEuroSymbol> {product.price}</span> </p>
                                    </div>
                                ))}
                            </div>
                            <p className="md:pt-[50px] pt-5  flex justify-center md:mx-[50px] mx-[20px]" ><Button buttonText="SHOW ALL"></Button></p>
                        </TabPanel>
                        <TabPanel>
                            <div className=" relative grid md:grid-cols-3 grid-cols-2 md:gap-[25px] gap-[5px] md:mx-[50px] mx-[20px] ">
                                {prince.map((product) => (

                                    <div key={product.id} className={`bg-[#B7B7B7] product-card font-custom ${isHovered === product.id && !isScrolling ? 'fade' : ''}`} onMouseEnter={() => handleMouseEnter(product.id)} onMouseLeave={handleMouseLeave}>
                                        <Link to={`productPrince/${product.id}`}> <img src={product.img} alt={product.productName} className="front-img" /></Link>
                                        <Link to={`productPrince/${product.id}`}> <img src={product.backImg} alt="" className="back-img " /></Link>
                                        <button className='absolute top-0 right-0  text-white bg-[#000000] md:px-4 md:py-1 md:text-[16px] text-[12px] px-2  py-[2px]  '>New</button>
                                        <button
                                            onClick={() => { 
                                                const uniqueId = generateUniqueId();
                                                { addToFav({ mainId : product.id ,
                                                    id : uniqueId ,
                                                    name: product.productName,
                                                    img: product.img,
                                                    price: product.price,
                                                    size: "S" ,
                                                    color: "Black" ,
                                                    route : "productPrince"}); }
                                                 }}
                                            style={{ fontSize: '30px', color: fav.some((item) => item.mainId === product.id) ? 'red' : 'black' }}
                                            className='absolute top-0 left-0 text-white md:px-4 md:py-1 md:text-[20px] text-[12px] px-2 py-[2px]'
                                        >
                                            {fav.some((item) => item.mainId === product.id) ? <IoIosHeart /> : <IoIosHeartEmpty />}
                                        </button>

                                        <div className="details-button md:flex justify-center items-center flex-col hidden md:block w-full bg-white p-3">
                                            <Fade direction=''>
                                                <div className='space-x-3'>
                                                    <button
                                                        className={`size-button ${sizeByProduct[product.id] === 'S' ? 'bg-gray-500 text-white' : ''}`}
                                                        onClick={() => handleSizeChange(product.id, 'S')}
                                                    >
                                                        S
                                                    </button>
                                                    <button
                                                        className={`size-button ${sizeByProduct[product.id] === 'M' ? 'bg-gray-500 text-white' : ''}`}
                                                        onClick={() => handleSizeChange(product.id, 'M')}
                                                    >
                                                        M
                                                    </button>
                                                    <button
                                                        className={`size-button ${sizeByProduct[product.id] === 'L' ? 'bg-gray-500 text-white' : ''}`}
                                                        onClick={() => handleSizeChange(product.id, 'L')}
                                                    >
                                                        L
                                                    </button>
                                                    <button
                                                        className={`size-button ${sizeByProduct[product.id] === 'XL' ? 'bg-gray-500 text-white' : ''}`}
                                                        onClick={() => handleSizeChange(product.id, 'XL')}
                                                    >
                                                        XL
                                                    </button>
                                                    <button
                                                        className={`size-button ${sizeByProduct[product.id] === '2XL' ? 'bg-gray-500 text-white' : ''}`}
                                                        onClick={() => handleSizeChange(product.id, '2XL')}
                                                    >
                                                        2XL
                                                    </button>

                                                </div>
                                            </Fade>
                                            <div className='pt-3 space-x-[7px]'>
                                                <button
                                                    className={`size-button ${colorByProduct[product.id] === 'Black' ? 'bg-gray-500 text-white' : ''}`}
                                                    onClick={() => handleColorChange(product.id, 'Black')}
                                                >
                                                    Black
                                                </button>
                                                <button
                                                    className={`size-button ${colorByProduct[product.id] === 'White' ? 'bg-gray-500 text-white' : ''}`}
                                                    onClick={() => handleColorChange(product.id, 'White')}
                                                >
                                                    White
                                                </button>
                                                <button
                                                    className={`size-button ${selectedSize[product.id] && selectedColor[product.id] ? 'bg-gray-500 text-white' : 'bg-gray-500 text-white'}`}
                                                    onClick={() => {
                                                        if (selectedSize[product.id] && selectedColor[product.id]) {

                                                            // Generate a 14-digit unique ID
                                                            const uniqueId = generateUniqueId();
                                                            // Both size and color are selected, call addToCart
                                                            addToCart({
                                                                mainId : product.id ,
                                                                id: uniqueId,
                                                                name: product.productName,
                                                                img: product.img,
                                                                price: product.price,
                                                                size: selectedSize[product.id],
                                                                color: selectedColor[product.id],
                                                            });
                                                            // Optionally, you can clear the selectedSize and selectedColor state after adding to cart
                                                            setSelectedSize((prevSelectedSize) => ({
                                                                ...prevSelectedSize,
                                                                [product.id]: null,
                                                            }));
                                                            setSelectedColor((prevSelectedColor) => ({
                                                                ...prevSelectedColor,
                                                                [product.id]: null,
                                                            }));
                                                        } else {
                                                            // Display a message or handle the case when size or color is not selected
                                                            // You may use toast or any other method to inform the user
                                                            toast.error('Please select both size and color.');                                                       
                                                                                                                
                                                        }

                                                    }}
                                                >
                                                    ADD TO CART
                                                </button>

                                            </div>
                                        </div>
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
                            <p className="md:pt-[50px] pt-5  flex justify-center md:mx-[50px] mx-[20px]" ><Button buttonText="SHOW ALL"></Button></p>
                        </TabPanel>
                        <TabPanel>
                            <div className=" relative grid md:grid-cols-3 grid-cols-2 md:gap-[25px] gap-[5px] md:mx-[50px] mx-[20px] ">
                                {princess.map((product) => (

                                    <div key={product.id} className={`bg-[#B7B7B7] product-card font-custom ${isHovered === product.id && !isScrolling ? 'fade' : ''}`} onMouseEnter={() => handleMouseEnter(product.id)} onMouseLeave={handleMouseLeave}>
                                        <Link to={`productPrincess/${product.id}`}> <img src={product.img} alt={product.productName} className="front-img" /></Link>
                                        <Link to={`productPrincess/${product.id}`}> <img src={product.backImg} alt="" className="back-img " /></Link>
                                        <button className='absolute top-0 right-0  text-white bg-[#000000] md:px-4 md:py-1 md:text-[16px] text-[12px] px-2  py-[2px]  '>New</button>
                                        <button
                                            onClick={() => { 
                                                const uniqueId = generateUniqueId();
                                                { addToFav({ mainId : product.id ,
                                                    id : uniqueId ,
                                                    name: product.productName,
                                                    img: product.img,
                                                    price: product.price,
                                                    size: "S" ,
                                                    color: "Black" ,
                                                    route : "productPrincess"}); }
                                                 }}
                                            style={{ fontSize: '30px', color: fav.some((item) => item.mainId === product.id) ? 'red' : 'black' }}
                                            className='absolute top-0 left-0 text-white md:px-4 md:py-1 md:text-[20px] text-[12px] px-2 py-[2px]'
                                        >
                                            {fav.some((item) => item.mainId === product.id) ? <IoIosHeart /> : <IoIosHeartEmpty />}
                                        </button>

                                        <div className="details-button md:flex justify-center items-center flex-col hidden md:block w-full bg-white p-3">
                                            <Fade direction=''>
                                                <div className='space-x-3'>
                                                    <button
                                                        className={`size-button ${sizeByProduct[product.id] === 'S' ? 'bg-gray-500 text-white' : ''}`}
                                                        onClick={() => handleSizeChange(product.id, 'S')}
                                                    >
                                                        S
                                                    </button>
                                                    <button
                                                        className={`size-button ${sizeByProduct[product.id] === 'M' ? 'bg-gray-500 text-white' : ''}`}
                                                        onClick={() => handleSizeChange(product.id, 'M')}
                                                    >
                                                        M
                                                    </button>
                                                    <button
                                                        className={`size-button ${sizeByProduct[product.id] === 'L' ? 'bg-gray-500 text-white' : ''}`}
                                                        onClick={() => handleSizeChange(product.id, 'L')}
                                                    >
                                                        L
                                                    </button>
                                                    <button
                                                        className={`size-button ${sizeByProduct[product.id] === 'XL' ? 'bg-gray-500 text-white' : ''}`}
                                                        onClick={() => handleSizeChange(product.id, 'XL')}
                                                    >
                                                        XL
                                                    </button>
                                                    <button
                                                        className={`size-button ${sizeByProduct[product.id] === '2XL' ? 'bg-gray-500 text-white' : ''}`}
                                                        onClick={() => handleSizeChange(product.id, '2XL')}
                                                    >
                                                        2XL
                                                    </button>

                                                </div>
                                            </Fade>
                                            <div className='pt-3 space-x-[7px]'>
                                                <button
                                                    className={`size-button ${colorByProduct[product.id] === 'Black' ? 'bg-gray-500 text-white' : ''}`}
                                                    onClick={() => handleColorChange(product.id, 'Black')}
                                                >
                                                    Black
                                                </button>
                                                <button
                                                    className={`size-button ${colorByProduct[product.id] === 'White' ? 'bg-gray-500 text-white' : ''}`}
                                                    onClick={() => handleColorChange(product.id, 'White')}
                                                >
                                                    White
                                                </button>
                                                <button
                                                    className={`size-button ${selectedSize[product.id] && selectedColor[product.id] ? 'bg-gray-500 text-white' : 'bg-gray-500 text-white'}`}
                                                    onClick={() => {
                                                        if (selectedSize[product.id] && selectedColor[product.id]) {

                                                            // Generate a 14-digit unique ID
                                                            const uniqueId = generateUniqueId();
                                                            // Both size and color are selected, call addToCart
                                                            addToCart({
                                                                mainId : product.id ,
                                                                id: uniqueId,
                                                                name: product.productName,
                                                                img: product.img,
                                                                price: product.price,
                                                                size: selectedSize[product.id],
                                                                color: selectedColor[product.id],
                                                            });
                                                            // Optionally, you can clear the selectedSize and selectedColor state after adding to cart
                                                            setSelectedSize((prevSelectedSize) => ({
                                                                ...prevSelectedSize,
                                                                [product.id]: null,
                                                            }));
                                                            setSelectedColor((prevSelectedColor) => ({
                                                                ...prevSelectedColor,
                                                                [product.id]: null,
                                                            }));
                                                        } else {
                                                            // Display a message or handle the case when size or color is not selected
                                                            // You may use toast or any other method to inform the user
                                                            toast.error('Please select both size and color.');                                                       
                                                                                                                
                                                        }

                                                    }}
                                                >
                                                    ADD TO CART
                                                </button>

                                            </div>
                                        </div>
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
                            <p className="md:pt-[50px] pt-5  flex justify-center md:mx-[50px] mx-[20px]" ><Button buttonText="SHOW ALL"></Button></p>
                        </TabPanel>
                        <TabPanel>
                            <div className=" relative grid md:grid-cols-3 grid-cols-2 md:gap-[25px] gap-[5px] md:mx-[50px] mx-[20px] ">
                                {accessories.map((product) => (

                                    <div key={product.id} className={`bg-[#B7B7B7] product-card font-custom ${isHovered === product.id && !isScrolling ? 'fade' : ''}`} onMouseEnter={() => handleMouseEnter(product.id)} onMouseLeave={handleMouseLeave}>
                                        <Link to={`accessories/${product.id}`}> <img src={product.img} alt={product.productName} className="front-img" /></Link>
                                        <Link to={`accessories/${product.id}`}> <img src={product.backImg} alt="" className="back-img " /></Link>
                                        <button className='absolute top-0 right-0  text-white bg-[#000000] md:px-4 md:py-1 md:text-[16px] text-[12px] px-2  py-[2px]  '>New</button>
                                        <button
                                            onClick={() => { 
                                                const uniqueId = generateUniqueId();
                                                { addToFav({ mainId : product.id ,
                                                    id : uniqueId ,
                                                    name: product.productName,
                                                    img: product.img,
                                                    price: product.price,
                                                    size: "S" ,
                                                    color: "Black" ,
                                                    route : "accessories"}); }
                                                 }}
                                            style={{ fontSize: '30px', color: fav.some((item) => item.mainId === product.id) ? 'red' : 'black' }}
                                            className='absolute top-0 left-0 text-white md:px-4 md:py-1 md:text-[20px] text-[12px] px-2 py-[2px]'
                                        >
                                            {fav.some((item) => item.mainId === product.id) ? <IoIosHeart /> : <IoIosHeartEmpty />}
                                        </button>

                                        <div className="details-button md:flex justify-center items-center flex-col hidden md:block w-full bg-white p-3">
                                            <Fade direction=''>
                                                <div className='space-x-3'>
                                                    <button
                                                        className={`size-button ${sizeByProduct[product.id] === 'S' ? 'bg-gray-500 text-white' : ''}`}
                                                        onClick={() => handleSizeChange(product.id, 'S')}
                                                    >
                                                        S
                                                    </button>
                                                    <button
                                                        className={`size-button ${sizeByProduct[product.id] === 'M' ? 'bg-gray-500 text-white' : ''}`}
                                                        onClick={() => handleSizeChange(product.id, 'M')}
                                                    >
                                                        M
                                                    </button>
                                                    <button
                                                        className={`size-button ${sizeByProduct[product.id] === 'L' ? 'bg-gray-500 text-white' : ''}`}
                                                        onClick={() => handleSizeChange(product.id, 'L')}
                                                    >
                                                        L
                                                    </button>
                                                    <button
                                                        className={`size-button ${sizeByProduct[product.id] === 'XL' ? 'bg-gray-500 text-white' : ''}`}
                                                        onClick={() => handleSizeChange(product.id, 'XL')}
                                                    >
                                                        XL
                                                    </button>
                                                    <button
                                                        className={`size-button ${sizeByProduct[product.id] === '2XL' ? 'bg-gray-500 text-white' : ''}`}
                                                        onClick={() => handleSizeChange(product.id, '2XL')}
                                                    >
                                                        2XL
                                                    </button>

                                                </div>
                                            </Fade>
                                            <div className='pt-3 space-x-[7px]'>
                                                <button
                                                    className={`size-button ${colorByProduct[product.id] === 'Black' ? 'bg-gray-500 text-white' : ''}`}
                                                    onClick={() => handleColorChange(product.id, 'Black')}
                                                >
                                                    Black
                                                </button>
                                                <button
                                                    className={`size-button ${colorByProduct[product.id] === 'White' ? 'bg-gray-500 text-white' : ''}`}
                                                    onClick={() => handleColorChange(product.id, 'White')}
                                                >
                                                    White
                                                </button>
                                                <button
                                                    className={`size-button ${selectedSize[product.id] && selectedColor[product.id] ? 'bg-gray-500 text-white' : 'bg-gray-500 text-white'}`}
                                                    onClick={() => {
                                                        if (selectedSize[product.id] && selectedColor[product.id]) {

                                                            // Generate a 14-digit unique ID
                                                            const uniqueId = generateUniqueId();
                                                            // Both size and color are selected, call addToCart
                                                            addToCart({
                                                                mainId : product.id ,
                                                                id: uniqueId,
                                                                name: product.productName,
                                                                img: product.img,
                                                                price: product.price,
                                                                size: selectedSize[product.id],
                                                                color: selectedColor[product.id],
                                                            });
                                                            // Optionally, you can clear the selectedSize and selectedColor state after adding to cart
                                                            setSelectedSize((prevSelectedSize) => ({
                                                                ...prevSelectedSize,
                                                                [product.id]: null,
                                                            }));
                                                            setSelectedColor((prevSelectedColor) => ({
                                                                ...prevSelectedColor,
                                                                [product.id]: null,
                                                            }));
                                                        } else {
                                                            // Display a message or handle the case when size or color is not selected
                                                            // You may use toast or any other method to inform the user
                                                            toast.error('Please select both size and color.');                                                       
                                                                                                                
                                                        }

                                                    }}
                                                >
                                                    ADD TO CART
                                                </button>

                                            </div>
                                        </div>
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
                            <p className="md:pt-[50px] pt-5  flex justify-center md:mx-[50px] mx-[20px]" ><Button buttonText="SHOW ALL"></Button></p>
                        </TabPanel>


                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default NewArivalSection;
