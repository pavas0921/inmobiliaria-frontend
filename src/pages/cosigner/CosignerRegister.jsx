import React, { useEffect } from "react";
import { NavbarComponent } from "../../components/Navbar";
import { PeopleRegister } from "../../components/PeopleForm";
import { useForm } from "react-hook-form";
import styles from "../../styles/global.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {selectCosignerState, registerCosigner} from "../../features/cosignerSlice";
import {Alerts} from "../../components/Alerts";

const CosignerRegister = () => {
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
  const cosignerResponse = useSelector(selectCosignerState);
  const {loading, httpStatus, message, cosigners, status} = cosignerResponse

  const onSubmit = (body) => {
    console.log("bodybody", body);
    dispatch(registerCosigner({ body, token }));
  };
  
    return (
        <div>
          <div>
            <NavbarComponent />
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <PeopleRegister
                title={"Registro de Codeudores"}
                btnRegister={"Registrar Codeudor"}
                btnList={"Listado de Codeudores"}
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



export default CosignerRegister