import React from 'react'

function Dashboardpage() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-3'>
          <div class="card text-bg-primary mb-3 shadow">
            <div class="card-body">
              <h5 class="card-title">Total Employees</h5>
              <h1>800</h1>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div class="card text-bg-success mb-3 shadow">
            <div class="card-body">
              <h5 class="card-title">Total Employees</h5>
              <h1>800</h1>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div class="card text-bg-warning mb-3 shadow">
            <div class="card-body">
              <h5 class="card-title">Total Employees</h5>
              <h1>800</h1>
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
          <div class="card text-bg-danger mb-3 shadow">
            <div class="card-body">
             <h5 class="card-title">Data graphs</h5>
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