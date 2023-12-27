import React from 'react'
import { NavbarComponent } from '../../components/Navbar'
import { OwnerTableComponent } from '../../components/Owners/OwnerTableComponents'

const OwnerTable = () => {
    return (
        <div>
            <div>
                <NavbarComponent />
            </div>
            <div>
                <OwnerTableComponent />
            </div>
        </div>
    )
}


export default OwnerTable