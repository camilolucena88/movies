import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import {useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import {Store} from "../../store/types";
import logout from "../../services/auth/logout";
import "./Header.css"

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
        <header className="text-gray-600 body-font shadow-sm bg-light">
            <Navbar className="grid grid-cols-3 gap-4 max-w-7xl mx-auto">
                <Link to="/"><Navbar.Brand><img className="w-10" src={logo} alt={brandName}/></Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-end">
                    {
                        access_token === '' ?
                            <div className="flex">
                                <div>
                                    <Link to="/login"><Nav className="mr-auto mx-5 text-pink-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="m-1 h-4 w-4" fill="none"
                                                   viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                                    </svg> Login
                                    </Nav></Link>
                                </div>
                                <div>
                                    <Link to="/register"><Nav className="mr-auto mx-5 text-pink-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="m-1 h-4 w-4" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                                        </svg> Sign up
                                    </Nav>
                                    </Link>
                                </div>
                            </div>:
                            <div className="flex">
                                <Link to="/wishlist">
                                    <Nav className="mr-auto mx-5 text-pink-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="m-1 h-4 w-4" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                                        </svg> Wishlist {movies.length}
                                    </Nav>
                                </Link>
                                <button onClick={() => logout()}>
                                <Nav className="mr-auto mx-5 text-pink-500">
                                    Logout <svg xmlns="http://www.w3.org/2000/svg" className="m-1 h-4 w-4" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fill-rule="evenodd"
                                              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </Nav>
                                </button>
                            </div>
                    }
                </Navbar.Collapse>
            </Navbar>
        </header>
    </div>
}

Header.defaultProps = defaultBrandName;
