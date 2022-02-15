import React from "react";
import { Button } from "reactstrap";

function Filter() {
  return (
    <div className="row justify-content-center bg-dark text-light rounded-bottom p-2 ">
      <div className="col-4 text-center align-self-center ">
        <div className="form-group filter-text">
          <label htmlFor="title ">Search</label>
          <input type="text" id="title" className="form-control mt-1" />
        </div>
      </div>
    </div>
  );
}

export default Filter;
