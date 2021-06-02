import React from 'react';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

type Props = {
    children: React.ReactNode;
};

const Layout = ({children}: Props) => {
    const brandName = "MaltaLovers"
    const logo = "https://maltalovers.com/wp-content/uploads/2019/01/Transparent-Background-Logox80x80.png"
    
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