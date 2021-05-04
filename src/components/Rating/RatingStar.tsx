import React from "react";
import Star from "./Star";

type Props = {
    rating: string
}

const starSelector = (rating: string) => {
    var rows = [];
    for (let i = 0; i < 5; i++) {
        if (parseInt(rating) / 2 >= (i + 1)) {
            rows.push(<Star type='full'/>)
        } else if (parseInt(rating) < (i + 1)) {
            rows.push(<Star type='none'/>)
        } else {
            if (parseInt(rating) % 2 !== 0 && parseInt(rating) / 2 > i)
                rows.push(<Star type='half'/>)
            else {
                rows.push(<Star type='none'/>)
            }
        }
    }
    return rows
}

const RatingStar = ({rating}: Props) => {
    return <div>
      <span  className="flex items-center">
          {starSelector(rating)}
            <span className="text-gray-600 ml-3">{rating}</span>
      </span>
    </div>
}

export default RatingStar;