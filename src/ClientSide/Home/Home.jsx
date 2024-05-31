// import BlogPosts from "./BlogPosts/BlogPosts";
import BlackSaleSection from "./BlackSaleSection/BlackSaleSection";
import HeroSection from "./HeroSection/HeroSection";
import HotSale from "./HotSale/HotSale";
import NewArivalSection from "./NewArivalSection/NewArivalSection";
import NewsLatter from "./NewsLatter/NewsLatter";
import ShadesSection from "./ShadesSection/ShadesSection";


const Home = () => {
    return (
        <div>
            <div className=" ">
                <HeroSection></HeroSection>
            </div>
            <NewArivalSection></NewArivalSection>
            {/* <BlogPosts></BlogPosts> */}
            <BlackSaleSection></BlackSaleSection>
            <HotSale></HotSale>
            <NewsLatter></NewsLatter>
            <ShadesSection></ShadesSection>
        </div>
    );
};

export default Home;