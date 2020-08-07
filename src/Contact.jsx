import React, { useState } from 'react'

const Contact =()=>{

    const [data, setdata]= useState({
        fullname:'',
        phone:'',
        email:'',
        massage:''
    })

    const InputEvent=(e)=>{
        const {name, value}= e.target;
        setdata((preVal) =>{
            return{
                ...preVal,
                [name]: value,
            }
        })

    }

    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is What I want to say ${data.massage}`)

    }
  
    return(
        <>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto"> {/*pahla col desktop ka liye or dusra col mobile k liye hi */}
                    
    <form onSubmit={formSubmit}>
    <div className="form-group">
        <label for="exampleFormControlInput1">Full Name</label>
        <input type="text"
        className="form-control" 
        id="exampleFormControlInput1" 
        name="fullname"
        value={data.fullname}
        onChange={InputEvent}
        placeholder="Enter Your Name" />
    </div>
    <div className="form-group">
        <label for="exampleFormControlInput1">Phone</label>
        <input type="number" 
        className="form-control" 
        id="exampleFormControlInput1" 
        name="phone"
        value={data.phone}
        onChange={InputEvent}
        placeholder="Mobile Number" />
    </div>
    <div className="form-group">
        <label for="exampleFormControlInput1">Email address</label>
        <input type="email"
         className="form-control" 
         id="exampleFormControlInput1" 
         name="email"
         value={data.email}
         onChange={InputEvent}
         placeholder="name@example.com" />
    </div>

    <div className="form-group">
        <label for="exampleFormControlTextarea1">Massage</label>
        <textarea className="form-control" 
        id="exampleFormControlTextarea1" rows="3"
        name="massage"
        value={data.massage}
        onChange={InputEvent}></textarea>
    </div>
    <div className="col-12 mt-2">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
    </div>
    </form>
                    
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact;