import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoremAsync } from "../redux/lorem/loremSlice";

function Form() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoremAsync());
  }, [dispatch]);

  return (
    <div className="container my-auto">
      <div className="row w-50 mx-auto mt-5">
        <div className="col-12">form</div>
      </div>
    </div>
  );
}

export default Form;
