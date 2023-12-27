import React, { useEffect } from "react";
import { NavbarComponent } from "../../components/Navbar";
import { PeopleRegister } from "../../components/PeopleForm";
import { useForm } from "react-hook-form";
import styles from "../../styles/global.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectTenantState, registerTenant } from "../../features/tenantSlilce";
import {Alerts} from "../../components/Alerts/";

const TenantRegister = () => {
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
  const tenantResponse = useSelector(selectTenantState);
  const {loading, httpStatus, message, tenants, status} = tenantResponse
  const onSubmit = (body) => {
    dispatch(registerTenant({ body, token }));
  };

  return (
    <div>
      <div>
        <NavbarComponent />
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <PeopleRegister
            title={"Registro de Inquilinos"}
            btnRegister={"Registrar Inquilino"}
            btnList={"Listado de Inquilinos"}
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

export default TenantRegister;
