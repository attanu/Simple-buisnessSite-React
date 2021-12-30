import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/Navbar';
import Routing from './components/Routing';
import Footer from './components/Footer';


const App = () => {

    return (
        <>
            <Navbar />
            <Routing />
            <Footer />
        </>
    );
};

export default App;
