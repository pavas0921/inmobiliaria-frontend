import React from 'react'
import { NavbarComponent } from '../../components/Navbar'
import { OwnerProfileForm } from '../../components/Owners/OwnerProfile'

const OwnerProfile = () => {
    return (
        <div>
            <div>
                <NavbarComponent />
            </div>
            <div>
                <OwnerProfileForm />
            </div>
        </div>

    )
}

export default OwnerProfile