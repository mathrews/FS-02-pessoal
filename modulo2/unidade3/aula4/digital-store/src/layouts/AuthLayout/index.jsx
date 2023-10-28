import { Outlet } from "react-router-dom";
import HeaderAuth from "../../components/HeaderAuth";
import Footer from "../../components/footer";

const AuthLayout = () => {
    return (
        <>
            <HeaderAuth />
            <Outlet />
            <Footer />
        </>
    );
};

export default AuthLayout;