import React from 'react'
import { NavbarComponent } from '../../components/Navbar'
import { TenantTableComponent } from '../../components/Tenants/TenantTableComponents'

const TenantTable = () => {
    return (
        <div>
            <div>
                <NavbarComponent />
            </div>
            <div>
                <TenantTableComponent />
            </div>
        </div>
    )
}


export default TenantTable