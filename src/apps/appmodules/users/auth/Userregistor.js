import React from 'react'
import { FaUserTie } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"

function Userregistor() {
     const {register,handleSubmit,formState: { errors }} = useForm();


const myformsubmit = (f)=>{
    console.log(f);
}


  return (
    <form onSubmit={handleSubmit(myformsubmit)}>
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
                                    <input type="email" class="form-control" {...register("email",{required:true})} />
                                    {errors.email && <p className='text-danger'>email is required</p>}
                                </div>
                            </div>
                            <div className='col-md-6 mt-2'>
                                <div class="mb-3">
                                    <label class="form-label">FullName</label>
                                    <input type="text" class="form-control" {...register("fullname",{required:true})}/>
                                    {errors.fullname && <p className='text-danger'>fullname is required</p>}
                                </div>
                            </div>


                            <div className='col-md-6 mt-2'>
                                <div class="mb-3">
                                    <label class="form-label">DOB</label>
                                    <input type="date" class="form-control" {...register("dob")}/>
                                </div>
                            </div>
                            <div className='col-md-6 mt-2'>
                                <div class="mb-3">
                                    <label class="form-label">Gender</label>
                                    <select className='form-select' {...register("gender")}>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>


                            <div className='col-md-6 mt-2'>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" {...register("pass",{required:true,minLength:5,maxLength:10})}/>
                                    {errors.pass?.type==="required" && <p className='text-danger'>password is required</p>}
                                    {errors.pass?.type==="minLength" && <p className='text-warning'>password must minimub 5 charector</p>}
                                    {errors.pass?.type==="maxLength" && <p className='text-info'>password too much above 10 charectors </p>}
                                </div>
                            </div>
                            <div className='col-md-6 mt-2'>
                                <div class="mb-3">
                                    <label class="form-label">Role</label>
                                    <select className='form-select' {...register("role")}>
                                        <option>User</option>
                                        <option>Admin</option>
                                        <option>Teacher</option>
                                        <option>UpperAdmin</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-12 text-center'>
                                <div class="mb-3">
                                    <button type='submit' className='btn btn-success'> <FaCheck/> Registor Now </button>
                                    <Link to="/userportal" className='ms-3'>Login</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
  )
}

export default Userregistor