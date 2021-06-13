import React from 'react';
import {DetailsCard} from "../../Details/DetailsCard";

export const BeachDetails = () => {
    return <div className="py-14 container">
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                <DetailsCard title="Weather" icon="sun"/>
                <DetailsCard title="Rocky Beach" icon="rocks"/>
                <DetailsCard title="Public Transport" icon="bus"/>
                <DetailsCard title="Free Parking" icon="parking"/>
                <DetailsCard title="Waves" icon="waves"/>
                <DetailsCard title="Food and Beverage" icon="pizza"/>
                <DetailsCard title="Water Sports" icon="surf"/>
                <DetailsCard title="Facilities" icon="shower"/>
            </div>
        </div>
    </div>
}