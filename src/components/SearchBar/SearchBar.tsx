import React from "react";
import './SearchBar.css'

type Props = {
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
}

const SearchBar = ({value, onChange}: Props) => {
    return (<div className="container">
        <input value={value} onChange={onChange.bind(this)}
               type="text"
               className="search-bar shadow-sm"
               placeholder="Search..."/>
    </div>)
}

export default SearchBar;