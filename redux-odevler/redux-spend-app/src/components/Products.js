import React from "react";
import productsSlice from "../redux/products/productsSlice";
import { useSelector } from "react-redux";
function Products() {
  const items = useSelector((state) => state.products.items);
  console.log(items);
  return (
    <div className="container bill-gates bg-light mt-0 text-nowrap text-center">
      <div className="row">
        <div className="col-2 ms-auto me-auto ">
          <img
            src={require("../images/billgates.jpg")}
            className="rounded-circle"
            alt="billgates"
            width="125px"
            heigth="125px"
          />
        </div>
      </div>
      <div className="row sitelink">
        <div className="col-2 ms-auto me-auto">Bill Gates</div>
      </div>
    </div>
  );
}

export default Products;
