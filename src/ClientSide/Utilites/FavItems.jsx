/* eslint-disable react/prop-types */
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaMinus } from 'react-icons/fa6';
import { Fade } from 'react-awesome-reveal';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const FavItems = ({ fav, close }) => {

    const [removedItems, setRemovedItems] = useState([]);
    const { removeFromFav } = useCart();

    const handleRemoveFromFavorites = (productId) => {
        setRemovedItems((prevRemovedItems) => [...prevRemovedItems, productId]);
        setTimeout(() => {
            removeFromFav(productId);
        }, 300);
    };


    const filteredFavorites = fav.filter((item) => !removedItems.includes(item.id));

    return (
        <div className="absolute md:top-[75px] top-0 z-50 font-custom right-0  bg-black text-white px-5 pb-5  pt-[6px] md:h-screen md:w-[28%] w-full overflow-auto ">
            <div className="flex justify-between">
                <h2 className="text-lg font-semibold mb-2">YOUR FAVORITES ({filteredFavorites.length})</h2>
                <button onClick={close} className="text-lg font-semibold mb-2">
                    <AiOutlineClose />
                </button>
            </div>
            {filteredFavorites?.length === 0 ? (
                <p>Your favorites is empty.</p>
            ) : (
                <div className="scroll-auto">
                    {filteredFavorites?.map((item) => (
                        <Fade key={item.id} direction="left" cascade triggerOnce={!removedItems.includes(item.id)}>
                            <div className="flex justify-between border-b-[1px] border-[#383838] py-5">
                                <div className="flex gap-[20px]">
                                    <div>
                                        <img className="h-[80px] w-[80px]" src={item.img} alt="" />
                                    </div>
                                    <div>
                                        <p>{item.name}</p>
                                        <p className="text-[15px] text-[#b7b7b7] hover:text-white">${item.price}</p>
                                        <div className="flex items-center border text-[15px] space-x-3 px-[8px] mt-2 border-[#383838]">
                                            <Link to={`${item.route}/${item.mainId}`}>
                                                <button  >
                                                    ADD TO CART
                                                </button>
                                            </Link>

                                        </div>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                                <div>
                                    <button
                                        onClick={() => handleRemoveFromFavorites(item.id)}
                                        className="text-lg font-semibold hover:text-red-500"
                                    >
                                        <FaMinus />
                                    </button>
                                </div>
                            </div>
                        </Fade>
                    ))}

                    {/* Remaining code for subtotal and checkout */}
                </div>
            )}
        </div>
    );
};

export default FavItems;
