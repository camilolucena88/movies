import * as React from 'react';

type Props = {
    logo?: string
    brandName?: string
};

const defaultBrandName = {
    brandName: "Brand Name Here",
    logo: "https://www.bcm-institute.org/wp-content/uploads/2020/11/No-Image-Icon.png"
}

const Footer = ({logo, brandName}: Props & typeof defaultBrandName) => {
    return <div>
        <footer className="text-gray-600 body-font pt-40">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a href="http://www.escuelauno.com" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <img id="brandLogo" src={logo} className="w-10" alt="brandLogo"/>
                    <span className="ml-3 text-xl">{brandName}</span>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">©
                    2021 Brandtech —
                    <a href="https://instagram.com/brandtechgroup" className="text-gray-600 ml-1"
                       rel="noopener noreferrer"
                       target="_blank">@brandtechgroup</a>
                </p>
                <button className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                         className="w-5 h-5"
                         viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <button className="ml-3 text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                         className="w-5 h-5"
                         viewBox="0 0 24 24">
                      <path
                          d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </button>
                  <a className="ml-3 text-gray-500"></a>
                </button>
            </div>
        </footer>
    </div>
}

Footer.defaultProps = defaultBrandName;

export default Footer;