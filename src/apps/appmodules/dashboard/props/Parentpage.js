import React from 'react'
import Childpage from './Childpage'

function Parentpage() {
    const myinfo = ()=>{
        alert("welcome to props of recatjs");
    }

    const emp = ["ravi","mohan","rohit","singh","mohit","khan","kumar",500,800,700,900];




  return (
    <div className='border p-5 bg-info text-white'>
        <h1>Parentpage</h1>

        <Childpage emplist={emp} displaysms={myinfo}></Childpage>

        </div>
  )
}

export default Parentpage