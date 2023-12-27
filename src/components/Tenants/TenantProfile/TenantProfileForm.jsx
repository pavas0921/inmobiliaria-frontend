
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useParams } from 'react-router-dom';
import { getOwnerByCedula, selectOwnerState } from '../../../features/ownerSlilce';
import { findPerson } from '../../../helpers/findPerson';
import styles from "./tenantProfile.module.scss";



const TenantProfileForm = () => {
    const [owner, setOwner] = useState({})
    const ownerResponse = useSelector(selectOwnerState)
    const dispatch = useDispatch()
    const token = sessionStorage.getItem("token")
    const { owners } = ownerResponse
    const { item } = owners
    const { cedula } = useParams()



    useEffect(() => {
        if (item && item.length > 0) {
            setOwner(findPerson({ item, cedula }))
        } else {
            dispatch(getOwnerByCedula({ cedula, token }))
        }

    }, [ownerResponse]);


    return (
        <div className={styles.div_main}>
            <div className={styles.div_card}>
                <div className={styles.div_title}>
                    <h2>Perfil de Propietario</h2>
                </div>
                <div className={styles.div_form}>

                    <form className={styles.form} >

                        <div className={styles.div_columnLeft}>
                            <Form.Control
                                type="text"
                                name="first_name"
                                placeholder='Nombres'
                                className={styles.formControl}
                                defaultValue={owner.first_name}


                            />
                            <Form.Control
                                type="text"
                                name="last_name"
                                placeholder='Apellidos'
                                className={styles.formControl}
                                defaultValue={owner.last_name}

                            />
                            <Form.Control
                                type="text"
                                name="cedula"
                                placeholder='Cédula'
                                className={styles.formControl}
                                defaultValue={owner.cedula}

                            />
                        </div>
                        <div className={styles.div_columnLeft}>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder='Correo eléctronico'
                                className={styles.formControl}
                                defaultValue={owner.email}


                            />
                            <Form.Control
                                type="text"
                                name="address"
                                aria-describedby="passwordHelpBlock"
                                placeholder='Dirección'
                                className={styles.formControl}
                                defaultValue={owner.address}

                            />
                            <Form.Control
                                type="text"
                                name="phone"
                                placeholder='Teléfono'
                                className={styles.formControl}
                                defaultValue={owner.phone}

                            />
                        </div>
                        <div className={styles.div_button}>
                            <Button variant="primary" type='submit'>Actualizar Propietario</Button>
                            <Button variant="primary">Ir al Menú Principal</Button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}


export default TenantProfileForm