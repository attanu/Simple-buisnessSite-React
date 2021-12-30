import React, { useState } from 'react';
import FormInput from './FormInput';

const Contact = () => {

    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        message: '',
    });

    const inputEvent = (event) => {
        const {name, value} = event.target;

        setData((prev) => {
            return { ...prev, [name] : value};
        });
    }

    const formSubmit = (e) =>{
        e.preventDefault();
        alert(` Thank you, ${data.fullname} for contacting us.`);
    }

    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'> Contact Us </h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>
                            
                            <FormInput 
                            text='Name' 
                            type='text' 
                            name='fullname' 
                            value={data.fullname}
                            placeholder='Enter Your Name.' 
                            change={inputEvent}
                            />
                            
                            <FormInput 
                            text='Phone' 
                            type='number' 
                            name='phone' 
                            value={data.phone}
                            placeholder='Enter Mobile No.' 
                            change={inputEvent}
                            />

                            <FormInput 
                            text='Email Address' 
                            type='text' 
                            name='email' 
                            value={data.email} 
                            placeholder='example.email.com'
                            change={inputEvent}
                            />

                            <div className="mb-3">
                              <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                              <textarea 
                              className="form-control" 
                              id="exampleFormControlTextarea1" 
                              rows="3"
                              name='message' 
                              value={data.message} 
                              onChange={inputEvent} />
                            </div>

                            <div className='col-12'>
                                <button className='btn btn-outline-primary' type='submit'> Submit </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;