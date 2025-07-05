import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserTie } from "react-icons/fa";
import { Myapplist } from './controls/Appcontrol';

function Welcomeapp() {
  return (
    <div className='container applist'>
      <div className='row'>
        {Myapplist.map((app)=>{
          return(
              <div className='col-md-2 text-center mt-3'>
          <Link  to={app.approuting} className='card p-2 shadow'>
            <h1><FaUserTie/></h1>
            <h4>{app.appname}</h4>
          </Link>
        </div>
          )
        })}

        
        
      </div>
    </div>
  )
}

export default Welcomeapp