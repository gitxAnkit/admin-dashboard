import React, { useState } from 'react';
import './Users.scss';
import DataTable from '../../Components/dataTable/DataTable';
import { userRows } from '../../data';
import Add from '../../Components/add/Add';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },

  {
    field: 'img',
    headerName: 'Avatar',
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />
    }
  },
  {
    field: 'firstName',
    headerName: 'First name',
    type: 'string',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    type: 'string',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'string',
    width: 200,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    type: 'string',
    width: 200,
    editable: true,
  },
  {
    field: 'createdAt',
    headerName: 'Created  At',
    type: 'string',
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

  const [open, setOpen] = useState(false);

  return (
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New Users</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {open && <Add setOpen={setOpen} columns={columns} />}
    </div>
  )
}

export default Users;