import React from 'react';
import { Route, Routes } from 'react-router';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Service from './Service';

const Routing = () => {

    return (
        <>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/service' element={<Service />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route exact path='*' element={<Home />} />
            </Routes>
        </>
    );
}

export default Routing;