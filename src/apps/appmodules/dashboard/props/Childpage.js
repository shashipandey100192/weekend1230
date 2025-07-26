import React from 'react'
import Subchildpage from './Subchildpage'

function Childpage(props) {
    return (
        <div className='border p-5 bg-warning text-white'>
            <h1>Child page</h1>
            <input type='button' value="message" onClick={props.displaysms} className="btn btn-primary"/>
            <select>
                {props.emplist.map((d)=>{
                    return <option>{d}</option>
                })}
            </select>

            <Subchildpage studentlist={props.emplist}></Subchildpage>
        </div>
    )
}

export default Childpage