import React from 'react'
import { FaUserTie } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"

function Userregistor() {
     const {register,handleSubmit} = useForm()



  return (
    <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-8 p-3 bg-light shadow'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <h1> <FaUserTie/></h1>
                                <p className='h5'>New User Registor Page</p>
                            </div>
                            <div className='col-md-6 mt-2'>
                                <div class="mb-3">
                                    <label class="form-label">  Email address</label>
                                    <input type="email" class="form-control" />
                                </div>
                            </div>
                            <div className='col-md-6 mt-2'>
                                <div class="mb-3">
                                    <label class="form-label">FullName</label>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>


                            <div className='col-md-6 mt-2'>
                                <div class="mb-3">
                                    <label class="form-label">DOB</label>
                                    <input type="date" class="form-control" />
                                </div>
                            </div>
                            <div className='col-md-6 mt-2'>
                                <div class="mb-3">
                                    <label class="form-label">Gender</label>
                                    <select className='form-select'>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>


                            <div className='col-md-6 mt-2'>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" />
                                </div>
                            </div>
                            <div className='col-md-6 mt-2'>
                                <div class="mb-3">
                                    <label class="form-label">Role</label>
                                    <select className='form-select'>
                                        <option>User</option>
                                        <option>Admin</option>
                                        <option>Teacher</option>
                                        <option>UpperAdmin</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-12 text-center'>
                                <div class="mb-3">
                                    <button type='button' className='btn btn-success'> <FaCheck/> Registor Now </button>
                                    <Link to="/userportal" className='ms-3'>Login</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Userregistor