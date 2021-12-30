import React from 'react';


const FormInput = (props) => {


    return (
        <>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label"> {props.text} </label>
              <input 
              type={props.type} 
              className="form-control" 
              id="exampleFormControlInput1" 
              name={props.name} 
              value={props.value} 
              onChange={props.change} 
              placeholder={props.placeholder} />
            </div>
        </>
    );
}

export default FormInput;