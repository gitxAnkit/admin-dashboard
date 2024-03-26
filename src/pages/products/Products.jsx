import React, { useState } from 'react';
import './Products.scss';
import DataTable from '../../Components/dataTable/DataTable';
import Add from '../../Components/add/Add';
import { products } from '../../data';
import { useQuery } from '@tanstack/react-query';

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];


const Products = () => {
  const [open, setOpen] = useState(false);
  const { isLoading, data } = useQuery({
    queryKey: ['allproducts'],
    queryFn: () =>
      fetch('http://localhost:3000/api/products').then((res) =>
        res.json(),
      ),
  })
  return (
    <div className='products'>
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>
<<<<<<< HEAD
      {isLoading ?
        ("Loading...") :
        (<DataTable slug="product" columns={columns} rows={data} />)}
      {open && <Add slug={"product"} setOpen={setOpen} columns={columns} />}
=======
      <DataTable slug="products" columns={columns} rows={products} />
      {open && <Add setOpen={setOpen} columns={columns} />}
>>>>>>> 34b532589eeb691494687d82ea2901e027c3f027
    </div>
  )
}

export default Products;