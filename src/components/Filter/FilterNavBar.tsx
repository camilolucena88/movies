import React from 'react'
import {Dropdown} from "react-bootstrap";

type Props = {
    onClick: (event: React.MouseEvent) => any;
    filters: string[],
    removeFilter: (event: React.MouseEvent) => any;
    categories: string[]
}

const FilterNavBar = ({onClick, filters, removeFilter, categories}: Props) => {
    const filterBtn = ((filter: string) => {
            return  <span className="badge rounded-pill bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-20 text-white">{filter}
                        <button data-filter={filter} onClick={removeFilter.bind(this)}> x</button>
                    </span>
        }) 
    
    const addFilters = filters.length > 0 ? filters.map((filter: string) => filterBtn(filter)) : ""
    
    const renderCategories = categories.map((category: string) => {
        return <Dropdown.Item data-filter={category} onClick={onClick.bind(this)}>{category}</Dropdown.Item>
    })
    
    return <>
        <style type="text/css">
            {`
                .btn-link:hover {
                  background-color: #e83e8c;
                  color: white;
                }
            `}
        </style>
        <div className="pt-10 mt-10 container flex">
            <div className="flex-1 text-left">
                {addFilters}
            </div>
            <div className="flex-1 flex flex-row-reverse">
                <Dropdown>
                    <Dropdown.Toggle className="text-purple-500 text-decoration-none hover:bg-purple-500
                               hover:text-white transition duration-500 ease-in-out" variant="link"
                                     id="dropdown-basic">
                        Tipo
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {renderCategories}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    </>
}

export default FilterNavBar;