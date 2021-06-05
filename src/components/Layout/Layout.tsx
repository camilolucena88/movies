import React from 'react';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const logoURL = process.env.LOGO_URL;
const brandName = process.env.BRAND_NAME;

type Props = {
    children: React.ReactNode;
};

const Layout = ({children}: Props) => {
    return <div>
        <Header brandName={brandName} logo={logoURL}/>
        {children}
        <Footer
            brandName={brandName}
            logo={logoURL}
        />
    </div>
}

export default Layout;