import React from 'react';
import CommonBody from './CommonBody';
import BodyImg from '../images/hero-img.png';


const About = () => {

    return (
        <>
            <CommonBody 
                h1Dsc='Some things about' 
                h2Dsc='Webalaya is a studio for building first-class Web and  Web app and our products are fast, reliable, secure and designed to Growww.' 
                btnDsc='Contact Now'
                img={BodyImg}
                visit='/contact'
                />
        </>
    );
};

export default About;