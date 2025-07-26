import React from 'react'
import { Link } from 'react-router-dom'

function Appsidenav() {
    return (
        <div class="flex-shrink-0 p-3">
            
            <ul class="list-unstyled ps-0">
                <li class="mb-1">
                    <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                        Home
                    </button>

                    <div class="collapse show" id="home-collapse">
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><Link to="dashboard" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Dashboard</Link></li>
                            <li><Link to="employees" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Employees</Link></li>
                            <li><Link to="invoice" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Invoice</Link></li>
                            <li><Link to="props" class="link-body-emphasis d-inline-flex text-decoration-none rounded">props</Link></li>
                            <li><Link to="graph" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Charts</Link></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )

}

export default Appsidenav