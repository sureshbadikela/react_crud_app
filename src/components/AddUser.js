import React from "react";

export const AddUser = ({ onAdd }) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.title.value, evt.target.body.value);
    evt.target.title.value = "";
    evt.target.body.value = "";
  };

  return (
    <div className="container">
      <div>
        <form onSubmit={handleOnSubmit}>
          <div className="row">
          <div className="col-sm-3"></div>
            <div className="col-sm-6">
              <h4 className="text-start" style={{fontWeight:'bold'}}>Add Post</h4>
            </div>
            <div className="col-sm-3"></div>
          </div>
          <div className="row my-2">
            <div className="col-sm-3">
            </div>
            <div className="col-sm-6">
              <input placeholder="Title" name="title" className=" form-control rounded-0" />
            </div>
            <div className="col-sm-3">
            </div>
          </div>
          <div className="row my-2">
            <div className="col-sm-3">
            </div>
            <div className="col-sm-6">
              <input placeholder="body" name="body" className="form-control rounded-0" />
            </div>
            <div className="col-sm-3">
            </div>
          </div>
          <div className="row text-center my-2">
            <div className="col-sm-3">
            </div>
            <div className="col-sm-6">
              <button onSubmit={handleOnSubmit} className='btn btn-success rounded-0 px-5 py-2'>Add</button>
            </div>
            <div className="col-sm-3">
            </div>
          </div>
          <hr></hr>
        </form>
      </div>
    </div>
  );
};
