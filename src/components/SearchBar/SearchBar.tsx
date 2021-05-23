import React from "react";
import './SearchBar.css'

type Props = {
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
}

const SearchBar = ({value, onChange}: Props) => {
    return (<div className="container">
        <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-20">
            <input value={value} onChange={onChange.bind(this)}
                   type="text"
                   className="search-bar shadow-sm"
                   placeholder="Search..."/>
        </div>
    </div>)
}

export default SearchBar;