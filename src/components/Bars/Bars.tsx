import React from "react";
import {DetailsCard} from "../Details/DetailsCard";
import {Menu} from "../Menu/Menu";

export const Bars = () => {
    return <div className="py-14 container">
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                <DetailsCard title="Public Transport" icon="bus"/>
                <DetailsCard title="Free Parking" icon="parking"/>
                <DetailsCard title="Entrance" icon="ticket"/>
                <DetailsCard title="Capacity" icon="user"/>
                <DetailsCard title="Type of Food" icon="pizza"/>
            </div>
        </div>
        <div className="flex items-center justify-center">
            <Menu/>
        </div>
    </div>
}