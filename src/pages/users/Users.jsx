import React from 'react';
import './Users.scss';
import DataTable from '../../Components/dataTable/DataTable';
import { userRows } from '../../data';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },

  {
    field: 'avatar',
    headerName: 'Avatar',
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />
    }
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 200,
    editable: true,
  },
  {
    field: 'createdAt',
    headerName: 'CreatedAt',
    width: 200,
    editable: true,
  },

  {
    field: 'verified',
    headerName: 'Verified',
    width: 100,
    type: 'boolean',
  },



];


const Users = () => {
  return (
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
        <button>Add New Users</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
    </div>
  )
}

export default Users;