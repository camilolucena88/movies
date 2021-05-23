import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import {useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import {Store} from "../../store/types";
import logout from "../../services/auth/logout";

type Props = {
    logo?: string
    brandName?: string
};

const defaultBrandName = {
    brandName: "Brand Name Here",
    logo: "https://www.bcm-institute.org/wp-content/uploads/2020/11/No-Image-Icon.png"
}

export default function Header({logo, brandName}: Props & typeof defaultBrandName) {
    
    const movies = useSelector((state: Store) => state.wishlist.elements)

    const access_token = useSelector((state: Store) => state.token.access_token)
    
    return <div>
        <header className="text-gray-600 body-font shadow-sm mb-10">
            <Navbar bg="light" expand="lg">
                <Link to="/"><Navbar.Brand><img className="w-10" src={logo} alt={brandName}/></Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    {
                        access_token === '' ?
                            <div>
                                <Link to="/login"><Nav className="mr-auto mx-5">
                                    Login
                                </Nav></Link>
                                <Link to="/register"><Nav className="mr-auto mx-5">
                                    Register
                                </Nav></Link>
                            </div>:
                            <div>
                                <button onClick={() => logout()}><Nav className="mr-auto mx-5">
                                    Logout
                                </Nav>
                                </button>
                            </div>
                    }
                    <Link to="/wishlist"><Nav className="mr-auto mx-5">
                        Wishlist {movies.length}
                    </Nav></Link>
                </Navbar.Collapse>
            </Navbar>
        </header>
    </div>
}

Header.defaultProps = defaultBrandName;
