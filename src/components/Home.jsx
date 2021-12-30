import React from 'react';
import CommonBody from './CommonBody';
import BodyImg from '../images/img2.svg';


const Home = () => {

    return (
        <>
            <CommonBody 
                h1Dsc='Grow your buisness with' 
                h2Dsc='One stop for all of your web development needs.' 
                btnDsc='Get Started'
                img={BodyImg}
                visit='/service'
                />
        </>
    );
};

export default Home;