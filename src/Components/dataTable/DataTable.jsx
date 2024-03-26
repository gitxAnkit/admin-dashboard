import React from 'react';
import './dataTable.scss';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const DataTable = (props) => {

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (id) => {
            fetch(`http://localhost:3000/api/${props.slug}s/${id}`, {
                method: "delete",
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries([`all${props.slug}s`]);
        }
    })

    const handleDelete = (id) => {
        //delete item
        mutation.mutate(id)
    }
    const actionsColumn = {
        field: 'actions',
        headerName: 'Actions',
        width: 200,
        renderCell: (params) => {

            return (
                <div className="action">
                    <Link to={`/${props.slug}/${params.row.id}`} >
                        <img src="/view.svg" alt="" />
                    </Link>
                    <div className="delete" onClick={() => handleDelete(params.row.id)}>
                        <img src="/delete.svg" alt="" />
                    </div>
                </div>
            );
        }
    }
    return (
        <div className='dataTable'>

            <DataGrid
                className='dataGrid'
                rows={props.rows}
                columns={[...props.columns, actionsColumn]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    }
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector

            />
        </div>
    )
}

export default DataTable