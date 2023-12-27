import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllOwners, selectOwnerState } from '../../../features/ownerSlilce';
import styles from "./ownerTableComponent.module.scss";

const OwnerTableComponent = () => {

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
                    <IconButton onClick={() => handleViewUser(`/owner/${params.row.cedula}`)} >
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
    const ownerResponse = useSelector(selectOwnerState)
    const { loading, owners, status } = ownerResponse
    const { item } = owners

    const handleViewUser = (path) => {
        console.log("path", path)
        navigate(path)
    }


    useEffect(() => {
        if (token) {
            dispatch(getAllOwners(token))
        }

    }, []);

    useEffect(() => {
        if (ownerResponse) {
            console.log(item)
        }


    }, [item]);


    return (

        <Box className={styles.box_main}>
            <div className={styles.div_title}>
                <h4>Maestro de Propietarios</h4>
            </div>
            <div className={styles.div_table}>
                {ownerResponse && item && item.length > 0 && (
                    <DataGrid
                        rows={item}
                        columns={columns}
                        getRowId={(item) => item.cedula}
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

export default OwnerTableComponent
