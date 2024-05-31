

const Store = () => {
    return (
        <div>
            <div className=''>
                <img className="md:mt-[-120px] mt-[-160px] h-[150px]  w-full" src="https://i.ibb.co/hy7jH3N/black.png" alt="" />
            </div>
            <div className="relative" >
                <div >
                    <img className="w-full md:h-[500px] h-[300px] object-cover" src="https://i.ibb.co/vqV8PKB/BLVCK-STORE-2.webp" alt="" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center  ">
                    <h1 className="md:text-[120px] text-[50px] pb-8 text-white">Black Stores</h1>
                    <p className="my-4"><button className="px-[30px] py-4 bg-black text-[#b1b1b1]">Find our Stores</button></p>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5 mt-[1px] md:mt-0">
                <div >
                    <img src="https://i.ibb.co/qBcV9St/IMG-1796-1296x.webp" alt="" />

                </div>
                <div className="mx-[20px] md:mx-0">
                    <h2 className="md:text-[37px] text-[22px] md:py-[16px] py-2">Contact Us</h2>
                    <p className="md:py-[16px] py-2">Email : blackaboy973000@hotmail.fr</p>
                    <p className="">Phone : +8800000000</p>
                    <h4 className="underline md:py-[16px] py-2">Opening Hours: :</h4>
                    <p>Monday-Saturday 10am-9pm</p>
                    <p className="md:py-[16px] py-2">Monday-Saturday 10am-9pm</p>
                    <p className="pb-6 md:pb-0"><button className="px-10 py-3 bg-black hover:text-[#686565] border  text-[#b1b1b1] ">Check The Map</button></p>

                </div>
            </div>
        </div>
    );
};

export default Store;