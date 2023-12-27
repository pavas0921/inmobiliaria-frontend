import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { login, selectUserState } from "../../features/userSlice";
import styles from "./loginForm.module.scss";

const LoginForm = () => {

    const [loginData, setLoginData] = useState(null)

    const dispatch = useDispatch();
    const loginResponse = useSelector(selectUserState);
    const { loading, users } = loginResponse
    const { data } = users
    const { token } = data || ""

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevValues) => ({
            ...prevValues,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(loginData))
    }

    useEffect(() => {
        if (token) {
            sessionStorage.setItem("token", token)
            navigate("/dashboard")
        }
    }, [token]);


    return (
        <div className={styles.div_main}>
            <form onSubmit={handleSubmit}>
                <div className={styles.div_form}>
                    <div className={styles.div_input}>
                        <h4>Inicio de Sesión</h4>
                    </div>
                    <div className={styles.div_input}>
                        <Form.Control
                            type="email"
                            placeholder="Correo electrónico"
                            name="email"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.div_input}>
                        <Form.Control
                            type="password"
                            placeholder="Contraseña"
                            name="password"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.div_input}>
                        <Button variant="primary" type="submit">Inicio de Sesión</Button>{' '}
                    </div>


                </div>
            </form>
        </div>
    )
}

export default LoginForm
