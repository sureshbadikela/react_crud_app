import React, { useState } from "react";

export const User = ({ title, body, id, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.title.value, evt.target.body.value);
    setIsEdit(!isEdit);
  };

  return (
    <div>
      {isEdit ? (
        <div className="container">
          <form onSubmit={handleOnEditSubmit}>
            <div className="row">
              <div className="col-sm-4 my-2">
                <input placeholder="Name" name="title" defaultValue={title} className="form-control rounded-0"/>
              </div>
              <div className="col-sm-4 my-2">
                <input placeholder="Email" name="body" defaultValue={body} className="form-control rounded-0" />
              </div>
              <div className="col-sm-4 my-2">
                <button onSubmit={handleOnEditSubmit} className='btn btn-success rounded-0 px-3'>Save</button>
              </div>
            </div>
          </form>
        </div>
      ) : (

        <div className="container">
          {/* <div className="user"> */}
          <div className="row align-items-center my-3">
            <div className="col-sm-4">
              <p className="text-start text-capitalize">{title}</p>
            </div>
            <div className="col-sm-4">
              <p className="text-start text-capitalize">{body}</p>
            </div>
            <div className="col-sm-4 ">
              <button className="btn btn-secondary rounded-0 mx-1 px-3" onClick={handleEdit}>Edit</button>
              <button className="btn btn-danger rounded-0 mx-1 px-2" onClick={handleDelete}>Delete</button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
