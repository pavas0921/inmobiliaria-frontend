import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import styles from "../styles/peopleRegister.module.scss";

const PeopleRegister = (props) => {
 
  const { title, btnRegister, btnList, register, handleSubmit, errors } = props;
  const messages = {
    req: "Este campo es obligatorio",
   };

  return (
    <Box className={styles.box_main}>
      <Box className={styles.box_card}>
        <Box className={styles.box_title}>
          <Typography variant="h4" color="initial">
            {title}
          </Typography>
        </Box>
        
          <Box className={styles.box_form}>
            <TextField
              {...register("first_name",  { required: messages.req })}
              type="text"
              name="first_name"
              className={styles.textField}
              label="Nombres"
              size="small"
              variant="standard"
              helperText={errors.first_name && errors.first_name.message}
            />
            <TextField
              {...register("last_name",  { required: messages.req })}
              type="text"
              name="last_name"
              className={styles.textField}
              label="Apellidos"
              size="small"
              variant="standard"
              helperText={errors.last_name && errors.last_name.message}
            />
            <TextField
              {...register("cedula",  { required: messages.req })}
              type="text"
              name="cedula"
              className={styles.textField}
              label="Cédula"
              size="small"
              variant="standard"
              helperText={errors.cedula && errors.cedula.message}
            />
            <TextField
              type="email"
              name="email"
              className={styles.textField}
              {...register("email",  { required: messages.req })}
              label="Correo Electrónico"
              size="small"
              variant="standard"
              helperText={errors.email && errors.email.message}
            />
            <TextField
              type="text"
              name="address"
              {...register("address",  { required: messages.req })}
              className={styles.textField}
              label="Dirección"
              size="small"
              variant="standard"
              helperText={errors.address && errors.address.message}
            />
            <TextField
              type="text"
              name="phone"
              {...register("phone",  { required: messages.req })}
              className={styles.textField}
              label="Teléfono"
              size="small"
              variant="standard"
              helperText={errors.phone && errors.phone.message}
            />
            <Box className={styles.box_btn}>
              <Button type="submit" variant="contained">{btnRegister}</Button>
              <Button variant="contained">{btnList}</Button>
            </Box>
          </Box>
      </Box>
    </Box>
  );
};

export default PeopleRegister;
