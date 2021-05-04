import React from "react";
import {useHistory} from "react-router-dom";

const ReverseBtn = () => {
    let history = useHistory();
    const handleClick = () => {
        history.goBack();
    }
    return <div className="container">
            <button className="flex align-items-start p-3 bg-indigo-500 text-white rounded-md" onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                          d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                          clip-rule="evenodd"/>
                </svg>
                Back
            </button>
        </div>
}

export default ReverseBtn