

// eslint-disable-next-line react/prop-types
const Button = ({ buttonText }) => {
   
    return (
        <div>
            <a href="#_" className="relative inline-flex items-center justify-center md:px-10  md:py-3 px-6 py-2 hover:text-black overflow-hidden font-custom font-medium tracking-tighter text-white bg-black  group">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white  rounded-full group-hover:w-56 group-hover:h-56"></span>
                {/* <span className="absolute inset-0 w-full h-full   rounded-sm opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span> */}
                <span className="relative whitespace-nowrap md:text-[16px]  text-[12px] ">{buttonText}</span>
            </a>
        </div>
    );
};

export default Button;