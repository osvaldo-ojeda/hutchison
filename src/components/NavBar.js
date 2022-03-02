import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaChartBar } from "react-icons/fa";
import { FaTh } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { AiTwotoneGold } from "react-icons/ai";
import { AiOutlineFile } from "react-icons/ai";
import { IoIosBuild } from "react-icons/io";

const NavBar = () => {
  return (
    <nav>
      <Link to="/dashboard">
        <AiOutlineDashboard
          style={{ marginBottom: "-2px", fontSize: "2rem" }}
        />
        <span>Dashboard</span>
      </Link>
      <Link to="/">
        <FaChartBar style={{ marginBottom: "-2px", fontSize: "2rem" }} />
        <span>Charts</span>
      </Link>
      <Link to="/table">
        <FaTh style={{ marginBottom: "-2px", fontSize: "2rem" }} />
        <span>Tables</span>
      </Link>
      <Link to="/">
        <FaRegEdit style={{ marginBottom: "-2px", fontSize: "2rem" }} />
        <span>Forms</span>
      </Link>
      <Link to="/">
        <IoIosBuild style={{ marginBottom: "-2px", fontSize: "2rem" }} />
        <span>UI Elements</span>
      </Link>
      <Link to="/">
        <AiTwotoneGold style={{ marginBottom: "-2px", fontSize: "2rem" }} />
        <span>Multi-Level Dropdown</span>
      </Link>
      <Link to="/">
        <AiOutlineFile style={{ marginBottom: "-2px", fontSize: "2rem" }} />
        <span>Sample Pages</span>
      </Link>
    </nav>
  );
};

export default NavBar;
