import React from 'react'
import './add.scss';
const Add = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault;
  };

  return (
    <div className='add'>
      <div className="modal">
        <span className='close' onClick={() => props.setOpen(false)}>X</span>
        <h1>Add new user</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((columns) => (
              <div className="item">
                <label>{columns.headerName}</label>
                <input type={columns.type} placeholder={columns.field} />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Add