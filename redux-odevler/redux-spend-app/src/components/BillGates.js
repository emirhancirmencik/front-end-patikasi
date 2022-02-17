import React from "react";

function BillGates() {
  return (
    <div className="container bill-gates bg-color mt-0 text-nowrap text-center">
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

export default BillGates;
