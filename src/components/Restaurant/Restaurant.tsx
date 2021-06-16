import React, {useState} from "react";
import {DetailsCard} from "../Details/DetailsCard";
import {Menu} from "../Menu/Menu";
import {Tab, Tabs} from "react-bootstrap";
import {GoogleMaps} from "../GoogleMaps/GoogleMaps";

export const Restaurant = () => {
    const [key, setKey] = useState('home');

    return <div className="py-14 container">
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(eventKey) => eventKey ? setKey(eventKey) : ''}
        >
            <Tab eventKey="home" title="Features">
                <h1 className="p-9">Features</h1>
                <div className="flex items-center justify-center">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                        <DetailsCard title="Public Transport" icon="bus"/>
                        <DetailsCard title="Free Parking" icon="parking"/>
                        <DetailsCard title="Entrance" icon="ticket"/>
                        <DetailsCard title="Capacity" icon="user"/>
                        <DetailsCard title="Type of Food" icon="pizza"/>
                    </div>
                </div>
            </Tab>
            <Tab title="Menu" eventKey="menu">
                <div className="flex items-center justify-center">
                    <Menu/>
                </div>
            </Tab>
            <Tab eventKey="maps" title="Maps">
                <h1 className="p-9">Maps</h1>
                <div className="container flex justify-center"><GoogleMaps latitude={35.9191716}
                                                                           longitude={14.4897774}/>
                </div>
            </Tab>
        </Tabs>
    </div>
}