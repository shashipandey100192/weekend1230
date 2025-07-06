import React from 'react'
import { FaUserTie } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Userlogin() {
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
                                    <input type="email" class="form-control" />
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div class="mb-3">
                                    <label class="form-label"><RiLockPasswordFill/> Password</label>
                                    <input type="password" class="form-control" />
                                </div>
                            </div>
                            <div className='col-md-12 text-center'>
                                <div class="mb-3">
                                    <button type='button' className='btn btn-success'> <FaCheck/> Login </button>
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