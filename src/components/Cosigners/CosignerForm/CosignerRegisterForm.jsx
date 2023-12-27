import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from "./styles.cosignerRegister.module.scss";


const CosignerRegisterForm = () => {
    return (
        <div className={styles.div_main}>
            <div className={styles.div_card}>
                <div className={styles.div_title}>
                    <h2>Registro de Codeudores</h2>
                </div>
                <div className={styles.div_form}>

                    <form className={styles.form}>
                        <div className={styles.div_columnLeft}>
                            <Form.Control
                                type="text"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                                placeholder='Nombres'
                                className={styles.formControl}
                            />
                            <Form.Control
                                type="text"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                                placeholder='Apellidos'
                                className={styles.formControl}
                            />
                            <Form.Control
                                type="text"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                                placeholder='Cédula'
                                className={styles.formControl}
                            />
                        </div>
                        <div className={styles.div_columnLeft}>
                            <Form.Control
                                type="email"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                                placeholder='Correo eléctronico'
                                className={styles.formControl}

                            />
                            <Form.Control
                                type="text"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                                placeholder='Dirección'
                                className={styles.formControl}
                            />
                            <Form.Control
                                type="text"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                                placeholder='Teléfono'
                                className={styles.formControl}
                            />
                        </div>
                        <div className={styles.div_button}>
                            <Button variant="primary">Registrar Codeudor</Button>
                            <Button variant="primary">Ir al listado de Codeudores</Button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}


export default CosignerRegisterForm