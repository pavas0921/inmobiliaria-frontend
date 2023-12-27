import React, {useEffect} from "react";
import { NavbarComponent } from "../../components/Navbar";
import { OwnerRegisterForm } from "../../components/Owners/OwnerRegisterForm";
import { PeopleRegister } from "../../components/PeopleForm";
import { useForm } from "react-hook-form";
import styles from "../../styles/global.module.scss"
import { useDispatch, useSelector } from 'react-redux';
import { registerOwner, selectOwnerState } from "../../features/ownerSlilce"; 
import {Loader} from "../../components/Loader"
import { Box } from "@mui/material";
import {Alerts} from "../../components/Alerts";

const OwnerRegister = () => {
    const token = sessionStorage.getItem("token");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
        first_name: "",
        last_name: "",
        cedula: "",
        email: "",
        address: "",
        phone: "",
    },
  });
  const dispatch = useDispatch();
  const ownerResponse = useSelector(selectOwnerState);
  const {loading, httpStatus, message, owners, status} = ownerResponse

  const onSubmit = (body) => {
    dispatch(registerOwner({ body, token }))
  };
  
  return (
    <div>
        {loading && (
            <Loader />
        )}
      <div>
        <NavbarComponent />
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <PeopleRegister
            title={"Registro de Propietarios"}
            btnRegister={"Registrar Propietario"}
            btnList={"Listado de Propietarios"}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
          />
        </form>
      </div>
      {!loading && httpStatus === 201 && status === "success" && (
        <Alerts message={message} status={status} />
    )}
    </div>
   
  );
};

export default OwnerRegister;
