import React from "react";
import Wrapper from "../hoc/Wrapper";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";


const Layout = (props) => {
    return(
        <Wrapper>
            <Header />
            {props.children}
            <Footer />
        </Wrapper>

    );
}

export default Layout;