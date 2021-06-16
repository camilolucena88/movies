import React, {useState} from "react";
import {DetailsCard} from "../Details/DetailsCard";
import {Menu} from "../Menu/Menu";
import {Events} from "../Events/Events";
import {OpeningHours} from "../OpeningHours/OpeningHours";
import {Calendar} from "../Calendar/Calendar";
import {Tab, Tabs} from "react-bootstrap";
import {GoogleMaps} from "../GoogleMaps/GoogleMaps";

export const NightClubs = () => {
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
                        <DetailsCard title="Type of Music" icon="music"/>
                    </div>
                </div>
            </Tab>
            <Tab eventKey="menu" title="Menu">
                <h1 className="p-9">Menu</h1>
                <div className="flex items-center justify-center">
                    <Menu/>
                </div>
            </Tab>
            <Tab eventKey="maps" title="Maps">
                <h1 className="p-9">Maps</h1>
                <div className="container flex justify-center"><GoogleMaps latitude={35.9191716} longitude={14.4897774}/></div>
            </Tab>
            <Tab eventKey="contact" title="Events">
                <div className="container">
                    <h1 className="p-9">Events</h1>
                    <Events/>
                </div>
            </Tab>
            <Tab eventKey="opening" title="Opening Hours">
                <div className="container">
                    <h1 className="p-9">Opening Hours</h1>
                    <OpeningHours/>
                </div>
            </Tab>
            <Tab eventKey="calendar" title="Calendar">
                <div className="container">
                    <h1 className="p-9">Calendar</h1>
                    <Calendar/>
                </div>
            </Tab>
        </Tabs>
    </div>
}