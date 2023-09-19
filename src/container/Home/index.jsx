import React from 'react';
import Talk from './Talk';
import Partner from './Partner';
import Service from './Service';
import Team from './Team';
import Project from './Project';

const Home = () => {
    return (
        <>
            <Talk />
            {/* <Partner/> */}
            <Service />
            <Team />
            <Project/>
        </>
    );
};

export default Home;    