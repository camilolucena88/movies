import React from 'react';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import useFetch from "../../store/useFetch";

type Props = {
    children: React.ReactNode;
};

const Layout = ({children}: Props) => {
    const brandName = "Escuela Uno"
    const logo = "https://escuelauno.com/wp-content/uploads/2020/09/untitled-1.png"
    
    return <div>
        <Header brandName={brandName} logo={logo}/>
        {children}
        <Footer
            brandName={brandName}
            logo={logo}
        />
    </div>
}

export default Layout;