import React, { useState } from 'react'
import { FaUserTie } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

function Userlogin() {

    const mynav = useNavigate();

    const [email, setemail]=useState("");
    const [pass,setpass]=useState("");


const updateemail = (e)=>{
    console.log(e.target.value);
    setemail(e.target.value);
}

const updatepass = (p)=>{
    setpass(p.target.value);
}

const formvalidation = ()=>{
    if(email==="" || pass==="")
    {
        alert("email and password is blank");
    }
    else
    {
       if(email==="admin" && pass==="123")
       {
        alert("welcome");
        mynav("/landing");
       }
       else
       {
        alert("email and password not match");
       }
    }
}



    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-5 p-3 bg-light shadow'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <h1> <FaUserTie/></h1>
                                <p className='h5'>User Login Page</p>
                            </div>
                            <div className='col-md-12 mt-3'>
                                <div class="mb-3">
                                    <label class="form-label"> <MdEmail/> Email address</label>
                                    <input type="email" class="form-control" value={email} onInput={updateemail}/>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div class="mb-3">
                                    <label class="form-label"><RiLockPasswordFill/> Password</label>
                                    <input type="password" class="form-control" value={pass} onInput={updatepass}/>
                                </div>
                            </div>
                            <div className='col-md-12 text-center'>
                                <div class="mb-3">
                                    <button type='button' className='btn btn-success' onClick={formvalidation}> <FaCheck/> Login </button>
                                    <Link to="/userregistor">Registor Now</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Userlogin