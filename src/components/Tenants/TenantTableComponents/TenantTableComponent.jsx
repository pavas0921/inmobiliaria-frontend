import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllTenant, selectTenantState } from '../../../features/tenantSlilce';
import styles from "./tenantTableComponent.module.scss";

const TenantTableComponent = () => {

    const columns = [
        { field: 'cedula', headerName: 'Cédula', width: 120 },
        {
            field: 'first_name',
            headerName: 'Nombres',
            width: 190,
            editable: true,
        },
        {
            field: 'last_name',
            headerName: 'Apellidos',
            width: 190,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 190,
            editable: true,
        },
        {
            field: 'address',
            headerName: 'Dirección',
            width: 190,

        },
        {
            field: 'phone',
            headerName: 'Teléfono',
            width: 120,

        },
        {
            field: 'actions',
            headerName: 'Acciones',
            width: 82,
            renderCell: (params) => (
                <Box>
                    <IconButton onClick={() => handleViewUser(`/tenant/${params.row.cedula}`)} >
                        <VisibilityIcon />
                    </IconButton>
                    <IconButton >
                        <DeleteIcon />
                    </IconButton>
                </Box>
            ),
        },


    ];


    const navigate = useNavigate()
    const token = sessionStorage.getItem("token")
    const dispatch = useDispatch()
    const tenantResponse = useSelector(selectTenantState)
    const { loading, tenants } = tenantResponse
    const { status, tenant } = tenants

    const handleViewUser = (path) => {
        console.log("path", path)
        navigate(path)
    }


    useEffect(() => {
        if (token) {
            dispatch(getAllTenant(token))
        }

    }, []);

    useEffect(() => {
        if (tenantResponse) {
            console.log(tenantResponse)
        }


    }, [tenantResponse]);


    return (

        <Box className={styles.box_main}>
            <div className={styles.div_title}>
                <h4>Maestro de Inquilinos</h4>
            </div>

            <div className={styles.div_table}>
                {tenantResponse && tenant && tenant.length > 0 && (
                    <DataGrid
                        rows={tenant}
                        columns={columns}
                        getRowId={(item) => item._id}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                        checkboxSelection
                        disableRowSelectionOnClick
                        className={styles.datagrid}
                    />
                )}
            </div>

        </Box>
    );
}

export default TenantTableComponent
