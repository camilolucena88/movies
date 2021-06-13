import React from "react";
import {useHistory} from "react-router-dom";

const ReverseBtn = () => {
    let history = useHistory();
    const handleClick = () => {
        history.goBack();
    }
    return <div className="container px-5">
            <button className="flex align-items-start p-2 text-pink-600 hover:bg-pink-600 hover:text-white rounded-md" onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd"
                          d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                          clipRule="evenodd"/>
                </svg>
                <small>Back</small>
            </button>
        </div>
}

export default ReverseBtn