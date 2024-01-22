import "./Layout.css";
import Home from "../../Pages/HOME/Home";
import Menus from "../menus/Menus";
import { AiFillFastBackward, AiFillFastForward } from "react-icons/ai";
import { useState } from "react";

const Layout = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icon">
            <p onClick={handleToggle}>
              {toggle ? (
                <AiFillFastBackward size={30} />
              ) : (
                <AiFillFastForward size={30} />
              )}
            </p>
          </div>
          <Menus toggle={toggle}></Menus>
        </div>
        <div className="container">
          <Home></Home>
        </div>
      </div>
    </>
  );
};

export default Layout;
