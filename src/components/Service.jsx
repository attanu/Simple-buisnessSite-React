import React from 'react';
import ServiceData from './ServiceData';
import Card from './Card';
const Service = () => {

    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'> Our Services </h1>
            </div>
            <div className='container-fluid mb-5'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row gy-4'>
                            {
                                ServiceData.map((value, index) => <Card  key={index} imgsrc={value.imgsrc} title={value.title}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;