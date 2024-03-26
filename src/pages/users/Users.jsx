import React, { useState } from 'react';
import './Users.scss';
import DataTable from '../../Components/dataTable/DataTable';
import { userRows } from '../../data';
import Add from '../../Components/add/Add';
import { useQuery } from '@tanstack/react-query';

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
  const { isLoading, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('http://localhost:3000/api/users').then((res) =>
        res.json(),
      ),
  })
  return (
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New Users</button>
      </div>
      {isLoading ?
        ("Loading...") :
        (<DataTable slug="user" columns={columns} rows={data} />)}
      {open && <Add slug="user" setOpen={setOpen} columns={columns} />}
    </div>
  )
}

export default Users;