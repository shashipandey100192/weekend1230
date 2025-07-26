import React from 'react'

function Subchildpage(props) {
  return (
   <div className='border p-5 bg-danger text-white'>
            <h1>Subchildpage</h1>
            <select>
                {props.studentlist.map((e)=>{
                    return <option>{e}</option>
                })}
            </select>
        </div>
  )
}

export default Subchildpage