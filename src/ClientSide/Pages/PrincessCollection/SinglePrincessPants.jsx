import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CustomizedAccordions from './CustomizedAccordions';
import { MdEuroSymbol } from 'react-icons/md';
import { Toaster, toast } from 'sonner';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../../Utilites/CartContext';





const SinglePrincessPants = () => {
    const singleData = useLoaderData();
    const [sizeByProduct, setSizeByProduct] = useState({});
    const [colorByProduct, setColorByProduct] = useState({});
    const [selectedSize, setSelectedSize] = useState({});
    const [selectedColor, setSelectedColor] = useState({});
    const { addToCart, addToFav, fav } = useCart();
    console.log(singleData.product)
    const { image, price, name, id } = singleData.product;

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
        <div className=' font-custom'>
            <Toaster
            />
            {/* <div className=''>
                <img className="md:mt-[-110px]  md:h-[150px] h-[70px] w-full" src="https://i.ibb.co/hy7jH3N/black.png" alt="" />
            </div> */}
            <div className='grid md:grid-cols-2  md:mx-[50px] md:gap-[50px] md:mt-[50px]  relative z-10  '>
                <div>
                    <Carousel
                        style={{ width: '100%', maxWidth: '500px' }}
                        dynamicHeight={false}
                    >
                        <div>
                            <img src={image} />

                        </div>
                        <div>
                            <img src={image} />

                        </div>

                    </Carousel>
                </div>
                <div className='px-[20px] md:px-[0px]'>
                    <p className='text-[14px] text-[#212121]'>Home . {name}</p>
                    <h2 className='md:my-[20px] md:text-[39px] my-[5px] text-[20px] text-[#212121] '>{name}</h2>
                    <h2><span className='flex  items-center md:text-[23px] md:mb-0 mb-2  text-[16px]'><MdEuroSymbol></MdEuroSymbol> {price}</span></h2>
                    <div className='md:pt-2 space-x-3'>
                        <button
                            className={`size-button ${sizeByProduct[id] === 'S' ? 'bg-gray-500 text-white' : ''}`}
                            onClick={() => handleSizeChange(id, 'S')}
                        >
                            S
                        </button>
                        <button
                            className={`size-button ${sizeByProduct[id] === 'M' ? 'bg-gray-500 text-white' : ''}`}
                            onClick={() => handleSizeChange(id, 'M')}
                        >
                            M
                        </button>
                        <button
                            className={`size-button ${sizeByProduct[id] === 'L' ? 'bg-gray-500 text-white' : ''}`}
                            onClick={() => handleSizeChange(id, 'L')}
                        >
                            L
                        </button>
                        <button
                            className={`size-button ${sizeByProduct[id] === 'XL' ? 'bg-gray-500 text-white' : ''}`}
                            onClick={() => handleSizeChange(id, 'XL')}
                        >
                            XL
                        </button>
                        <button
                            className={`size-button ${sizeByProduct[id] === '2XL' ? 'bg-gray-500 text-white' : ''}`}
                            onClick={() => handleSizeChange(id, '2XL')}
                        >
                            2XL
                        </button>

                    </div>
                    <div className='md:pt-3 pt-2 md:space-x-[7px] md:flex-none flex    space-x-[2px]'>
                        <button
                            className={`size-button ${colorByProduct[id] === 'Black' ? 'bg-gray-500 text-white' : ''}`}
                            onClick={() => handleColorChange(id, 'Black')}
                        >
                            Black
                        </button>
                        <button
                            className={`size-button ${colorByProduct[id] === 'White' ? 'bg-gray-500 text-white' : ''}`}
                            onClick={() => handleColorChange(id, 'White')}
                        >
                            White
                        </button>


                    </div>
                    <div className='grid grid-cols-2 items-center md:my-[30px] my-[15px] md:gap-2 gap-1'>
                        <button
                            className={` md:py-[14px] md:px-[20px] py-[7px] px-[5px] md:text-[14px] text-[10px] ${selectedSize[id] && selectedColor[id] ? 'bg-black text-white' : 'bg-gray-200'}`}
                            onClick={() => {
                                if (selectedSize[id] && selectedColor[id]) {

                                    // Generate a 14-digit unique ID
                                    const uniqueId = generateUniqueId();
                                    // Both size and color are selected, call addToCart
                                    addToCart({
                                        mainId: id,
                                        id: uniqueId,
                                        name: name,
                                        img: image,
                                        price: price,
                                        size: selectedSize[id],
                                        color: selectedColor[id],
                                    });
                                    // Optionally, you can clear the selectedSize and selectedColor state after adding to cart
                                    setSelectedSize((prevSelectedSize) => ({
                                        ...prevSelectedSize,
                                        [id]: null,
                                    }));
                                    setSelectedColor((prevSelectedColor) => ({
                                        ...prevSelectedColor,
                                        [id]: null,
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
                        <button
                            onClick={() => {
                                const uniqueId = generateUniqueId();
                                {
                                    addToFav({
                                        mainId: id,
                                        id: uniqueId,
                                        name: name,
                                        img: image,
                                        price: price,
                                        size: selectedSize[id],
                                        color: selectedColor[id],
                                        route : "princessPants/productPrincessPants"
                                    });
                                }
                            }}
                            
                            className={` md:py-[14px] md:px-[20px] py-[7px] px-[5px] md:text-[14px] text-[10px]  bg-black text-white`}
                        >
                            {fav.some((item) => item.mainId === id) ? "ALREADY FAVOURITE" : "ADD FAVOURITE"}
                        </button>
                        {/* <button className='bg-[#B7B7B7] hover:bg-black hover:text-white text-black md:py-[14px] md:px-[20px] py-[7px] px-[10px] text-[14px]'>ADD WHITELIST</button> */}
                    </div>

                    <div className=' ml-0 '>
                        <CustomizedAccordions></CustomizedAccordions>
                    </div>
                    {/* <p className='py-4'><button  className='px-[20px] py-2 text-white hover:text-[#686565] hover:border-[#b7b7b7] border bg-black'>Write Review</button></p> */}
                </div>
            </div>
        </div>
    );
};

export default SinglePrincessPants;
