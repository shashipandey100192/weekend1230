import React, { Fragment } from 'react'
import Appheader from '../../shares/Appheader'
import Appsidenav from '../../shares/Appsidenav'
import Homepage from './Homepage'
import { Outlet } from 'react-router-dom'

function Mainpage() {
  return (
    <Fragment>
        <Appheader></Appheader>
        <div className='container-fluid' style={{marginTop:62}}>
            <div className='row'>
                <div className='col-md-2 border'>
                    <Appsidenav/>
                </div>
                <div className='col-md-10 border' style={{height:'90vh'}}>
                   <Outlet></Outlet>
                </div>
            </div>
        </div>

    </Fragment>
  )
}

export default Mainpage