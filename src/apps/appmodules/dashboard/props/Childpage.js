import React from 'react'
import Subchildpage from './Subchildpage'
import { useContext } from 'react'
import { Mydatalist } from '../../../shares/Mysharedata'

function Childpage(props) {
    const dispdata = useContext(Mydatalist);
    return (
        <Mydatalist.Provider>
        <div className='border p-5 bg-warning text-white'>
            <h1>Child page</h1>
           <h2> {dispdata.name} {dispdata.age}</h2>
            <input type='button' value="message" onClick={props.displaysms} className="btn btn-primary"/>
            <select>
                {props.emplist.map((d)=>{
                    return <option>{d}</option>
                })}
            </select>

            <Subchildpage studentlist={props.emplist} a = {dispdata.name}></Subchildpage>
        </div>
        </Mydatalist.Provider>
    )
}

export default Childpage