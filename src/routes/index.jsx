import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginForm from "../components/Login/LoginForm";
import { TenantProfileForm } from "../components/Tenants/TenantProfile";
import { CosignerRegister } from "../pages/cosigner";
import { Dashboard } from "../pages/dashboard";
import { OwnerProfile, OwnerRegister, OwnerTable } from "../pages/owners";
import { TenantRegister } from "../pages/tenant";
import TenantTable from "../pages/tenant/TenantTable";
const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginForm />,
        errorElement: <div> Hubo un error!!</div>,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        errorElement: <div> Hubo un error!!</div>,
    },
    {
        path: "/owner-add",
        element: <OwnerRegister />,
        errorElement: <div> Hubo un error!!</div>,
    },
    {
        path: "/owners",
        element: <OwnerTable />,
        errorElement: <div> Hubo un error!!</div>,
    },
    {
        path: "/owner/:cedula",
        element: <OwnerProfile />,
        errorElement: <div> Hubo un error!!</div>,
    },
    {
        path: "/tenant-add",
        element: <TenantRegister />,
        errorElement: <div> Hubo un error!!</div>,
    },
    {
        path: "/tenant",
        element: <TenantTable />,
        errorElement: <div> Hubo un error!!</div>,
    },
    {
        path: "/tenant/:cedula",
        element: <TenantProfileForm />,
        errorElement: <div> Hubo un error!!</div>,
    },
    {
        path: "/cosigner-add",
        element: <CosignerRegister />,
        errorElement: <div> Hubo un error!!</div>,
    },


]);

export const CustomRouterProvider = () => (
    <RouterProvider router={router}></RouterProvider>
);
