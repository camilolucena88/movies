import React from "react";
import {MenuCard} from "./MenuCard";

type Food = {
    breakfast?: string[],
    lunch?: string[],
    dinner?: string[],
    dessert?: string[],
}

type Drinks = {
    drinks?: string[],
    wines?: string[],
}

type Props = {
    food?: Food
    drinks?: Drinks
}

export const Menu = ({food, drinks}: Props) => {
    return <div>
        <h1>Breakfast</h1>
        <MenuCard/>
        <h1>Lunch</h1>
        <MenuCard/>
        <h1>Dinner</h1>
        <MenuCard/>
        <h1>Drinks</h1>
        <MenuCard/>
        <h1>Wines</h1>
        <MenuCard/>
        <h1>Dessert</h1>
        <MenuCard/>
    </div>
}