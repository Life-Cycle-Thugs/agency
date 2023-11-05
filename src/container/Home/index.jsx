import React from 'react';
import Talk from './Talk';
import Partner from './Partner';
import Service from './Service';
import Team from './Team';
import Project from './Project';
import Subscribe from './Subscribe';
import WorkingProcess from './WorkingProcess';
import Customer from './Customer';

const Home = () => {
    return (
      <>
        <Talk />
        {/* <Partner/> */}
        <Service />
        <WorkingProcess />
        <Team />
        <Customer />
        <Project />

        <Subscribe />
      </>
    );
};

export default Home;    