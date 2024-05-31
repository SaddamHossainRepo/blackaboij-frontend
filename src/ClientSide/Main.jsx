import { Outlet, useLocation } from "react-router-dom";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";


const Main = () => {

    const location = useLocation();
    const pathsToHideHeaderFooter = ['/signIn', '/signUp', '/checkout', "/forgetPassword", "/newPassword"];
    // Check if the current pathname is in the array of paths to hide Header and Footer.
    const shouldHideHeaderFooter = pathsToHideHeaderFooter.includes(location.pathname);

    return (
        <div>
            {!shouldHideHeaderFooter && <Header />}
            <Outlet />
            {!shouldHideHeaderFooter && <Footer />}
        </div>
    );
};

export default Main;


