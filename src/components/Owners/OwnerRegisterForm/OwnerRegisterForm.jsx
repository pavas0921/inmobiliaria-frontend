import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { registerOwner, selectOwnerState } from '../../../features/ownerSlilce';
import styles from "./ownerRegister.module.scss";
import { PeopleRegister } from '../../PeopleForm';


const OwnerRegisterForm = () => {
    

    return (
        <PeopleRegister/>
    )
}


export default OwnerRegisterForm