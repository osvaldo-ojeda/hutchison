import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsQuestion } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import { VscTriangleUp } from "react-icons/vsc";

const DropDownNav = () => {
  const param = useLocation();
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {}, [param]);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };
  return (
    <>
      <div className="dropDown">
        <BsQuestion style={{ fontSize: "3rem" }} />
        <GoTriangleDown style={{ fontSize: "3rem" }} onClick={handleDropDown} />
        {dropDown ? (
          <div className="dropDownCard">
            <VscTriangleUp
              style={{ fontSize: "3rem", marginTop: "-200px" }}
              onClick={handleDropDown}
            />
            {param.pathname === "/login" ? (
              <Link to="/ ">
                <button className="btn-login" onClick={handleDropDown}>
                  Home
                </button>
              </Link>
            ) : (
              <Link to="/login ">
                <button className="btn-login" onClick={handleDropDown}>
                  Login
                </button>
              </Link>
            )}

            {param.pathname === "/singin" ? (
              <Link to="/ ">
                <button className="btn-singIn" onClick={handleDropDown}>
                  Home
                </button>
              </Link>
            ) : (
              <Link to="/singin ">
                <button className="btn-singIn" onClick={handleDropDown}>
                  Sing In
                </button>
              </Link>
            )}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default DropDownNav;
