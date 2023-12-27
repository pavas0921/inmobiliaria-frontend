import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { registerTenant, selectTenantState } from '../../../features/tenantSlilce';
import styles from "./tenantRegister.module.scss";


const TenantRegisterForm = () => {
    const [tenantData, setTenantData] = useState({
        first_name: "",
        last_name: "",
        cedula: "",
        email: "",
        address: "",
        phone: "",
    })

    const dispatch = useDispatch()
    const tenantResponse = useSelector(selectTenantState)
    const token = sessionStorage.getItem("token")

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTenantData((prevValues) => ({
            ...prevValues,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(registerTenant({ tenantData, token }))
    }

    useEffect(() => {
        console.log(tenantResponse)
    }, [tenantResponse]);

    return (
        <div className={styles.div_main}>
            <div className={styles.div_card}>
                <div className={styles.div_title}>
                    <h2>Registro de Inquilinos</h2>
                </div>
                <div className={styles.div_form}>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.div_columnLeft}>
                            <Form.Control
                                type="text"
                                name="first_name"
                                placeholder='Nombres'
                                className={styles.formControl}
                                onChange={handleInputChange}
                            />
                            <Form.Control
                                type="text"
                                name="last_name"
                                placeholder='Apellidos'
                                className={styles.formControl}
                                onChange={handleInputChange}
                            />
                            <Form.Control
                                type="text"
                                name="cedula"
                                placeholder='Cédula'
                                className={styles.formControl}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={styles.div_columnLeft}>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder='Correo eléctronico'
                                className={styles.formControl}
                                onChange={handleInputChange}

                            />
                            <Form.Control
                                type="text"
                                name="address"
                                aria-describedby="passwordHelpBlock"
                                placeholder='Dirección'
                                className={styles.formControl}
                                onChange={handleInputChange}
                            />
                            <Form.Control
                                type="text"
                                name="phone"
                                placeholder='Teléfono'
                                className={styles.formControl}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={styles.div_button}>
                            <Button variant="primary" type='submit'>Registrar Inquilino</Button>
                            <Button variant="primary">Ir al listado de Inquilino</Button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}


export default TenantRegisterForm