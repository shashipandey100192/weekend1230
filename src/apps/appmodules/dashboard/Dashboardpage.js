import React, { useEffect, useState } from 'react'
import Mygraphpage from './Mygraphpage';

function Dashboardpage() {
    const [localdata,setlocaldata]=useState([]);
    const [geye, setgeye]=useState([]);
    const [gmale, updategmale]=useState([]);
  
  const getmylocadata = ()=>{
      //main state
      const a = JSON.parse(localStorage.getItem("apidata"));
      setlocaldata(a);

      // green eye color filter
      const b = a.filter((eyes)=>{
        return eyes.eyeColor==="Green"
      });
      setgeye(b);

      // gender male filter
        const c = a.filter((g)=>{
          return g.gender==="male"
        });
        updategmale(c);






  }
  useEffect(()=>{
    getmylocadata();
  },[]);


  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-3'>
          <div class="card text-bg-primary mb-3 shadow">
            <div class="card-body">
              <h5 class="card-title">Total Users </h5>
              <h1>{localdata?.length}</h1>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div class="card text-bg-success mb-3 shadow">
            <div class="card-body">
              <h5 class="card-title">Green Eyes Employees</h5>
              <h1>{geye?.length}</h1>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div class="card text-bg-warning mb-3 shadow">
            <div class="card-body">
              <h5 class="card-title">Total Male Employees</h5>
              <h1>{gmale?.length}</h1>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div class="card text-bg-danger mb-3 shadow">
            <div class="card-body">
              <h5 class="card-title">Total Employees</h5>
              <h1>800</h1>
            </div>
          </div>
        </div>

        <div className='col-md-8'>
          <div class="card text-bg-light mb-3 shadow">
            <div class="card-body">
             <h5 class="card-title">Data graphs</h5>
             <div style={{width:'100%',height:'350px'}}>
             <Mygraphpage/>
             </div>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div class="card text-bg-danger mb-3 shadow">
            <div class="card-body">
              <h5 class="card-title">Data graphs</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboardpage