import { useEffect, useState } from "react";
import { MdEuroSymbol } from "react-icons/md";
import { Link } from "react-router-dom";
// import Button from "../../Utilites/Button";
import { Fade, Zoom } from "react-awesome-reveal";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

import { toast } from "sonner";
import { useCart } from "../../../Utilites/CartContext";
import Button from "../../../Utilites/Button";



// Reusable Star component
// eslint-disable-next-line react/prop-types


const WomenHoodies = () => {
    const { addToCart, addToFav, fav } = useCart();
    const [sizeByProduct, setSizeByProduct] = useState({});
    const [colorByProduct, setColorByProduct] = useState({});
    const [selectedSize, setSelectedSize] = useState({});
    const [selectedColor, setSelectedColor] = useState({});
    const [isHovered, setIsHovered] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const [isScrolling, setIsScrolling] = useState(false);

    const [womenHoodiesCollections, setWomenHoodiesCollections] = useState([]);
    
    // const womenHoodiesCollectionsProducts = "http://localhost:9000/v1/products/?sortBy=name&limit=10&page=0&max=500&min=0&categoryId=2&subCategoryId=2";

    const womensProducts = "./HotSalewomenProducts.json";


    useEffect(() => {
        // Fetch the JSON data
        fetch(womensProducts)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // setWomenHoodiesCollections(data.data);
                setWomenHoodiesCollections(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, [womensProducts]);
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

    const generateUniqueId = () => {
        const randomPart = Math.floor(Math.random() * 90000000000000) + 10000000000000; // 14-digit random number
        return randomPart.toString();
    };

    
    return (
        <div>
            <div className="relative md:h-[450px] h-[250px] flex items-center justify-center"
                style={{
                    backgroundImage: "url('https://i.ibb.co/QpsmcTv/women-2b-2700x.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'cover',
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#00000",
                    position: "relative"
                }}
            >
                <Zoom><h2 className="md:md:text-6xl text-[20px] text-2xl text-white font-custom font-bold whitespace-nowrap"
                >
                    HOODIES NEW COLLECTIONS
                </h2></Zoom>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-[10px] md:gap-[25px] mt-[50px]  md:mx-[50px] mx-[20px] ">
                {womenHoodiesCollections.map((product) => (
                    <div key={product.id} className={`bg-[#B7B7B7] product-card font-custom ${isHovered === product.id && !isScrolling ? 'fade' : ''}`} onMouseEnter={() => handleMouseEnter(product.id)} onMouseLeave={handleMouseLeave}>
                        <Link to={`productWomenHoodies/${product.id}`}> <img src={product.img} alt={product.name} className="front-img" /></Link>
                        <Link to={`productWomenHoodies/${product.id}`}> <img src={product.backImg} alt="" className="back-img " /></Link>
                        <button className='absolute top-0 right-0  text-white bg-[#000000] md:px-4 md:py-1 md:text-[16px] text-[12px] px-2  py-[2px]  '>New</button>
                        <button
                            onClick={() => {
                                const uniqueId = generateUniqueId();
                                {
                                    addToFav({
                                        mainId: product.id,
                                        id: uniqueId,
                                        name: product.name,
                                        img: product.image,
                                        price: product.price,
                                        size: "S",
                                        color: "Black",
                                        route: "womensHoodies/productWomenHoodies"
                                    });
                                }
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
                                                mainId: product.id,
                                                id: uniqueId,
                                                name: product.name,
                                                img: product.image,
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
                        <h3 className="text-center md:py-4 py-1 md:text-[22px] bg-black text-[16px] text-white">{product.name}</h3>
                        <div className="text-center bg-[#000000] text-white md:pb-2 pb-2 flex justify-center items-center">
                            <span className="md:mr-2 mr-1">
                                <Star rating={product.starRating} />
                            </span>
                            <span>
                                {product.starRating} Reviews
                            </span>
                        </div>
                        <p className="md:pb-3 pb-1 text-center md:text-[15px] text-[12px] bg-black text-white"> <span className='flex justify-center items-center'><MdEuroSymbol></MdEuroSymbol> {product.price}</span> </p>
                    </div>
                ))}
            </div>
            <p className="md:pt-[50px] pt-[25px] md:pb-[100px] pb-[50px] flex justify-center md:mx-[50px] mx-[20px]" ><Button buttonText="SHOW ALL"></Button></p>
        </div>
    );
};

export default WomenHoodies;
