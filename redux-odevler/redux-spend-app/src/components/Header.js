import React from "react";

function Header() {
  return (
    <div className="header container me-0 ms-0 w-100 mw-100 ">
      <div className="row h-100 align-items-center justify-content-between">
        <div className="col-12 col-md-5 col-lg-4 text-nowrap text-center">
          {" "}
          <a href="/" className="sitelink">
            Spend Bill Gates' Money
          </a>
        </div>
        <div className="col-12 ms-5 text-center col-md-5 col-lg-4 text-muted text-nowrap">
          <span className="">
            made with love by{" "}
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="https://github.com/emirhancirmencik"
              className="sitelink gitlink "
            >
              emirhan cirmencik
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
