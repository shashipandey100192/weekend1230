import React from 'react'
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Apperror() {
  return (
    <div className='container-fluid bg-danger ch'>
        <div className='row'>
            <div className='col-12 text-center text-white'>
                <h1 style={{fontSize:100}}>404</h1>
                <h1>Not Found Page</h1>
                <Link to="/" className='btn btn-success'><IoArrowBackCircleSharp/> Back to login</Link>
            </div>
        </div>
    </div>
  )
}

export default Apperror