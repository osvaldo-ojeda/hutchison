import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

const DropDownLoged = () => {
  return (
    <nav className="loged">
      <Link to="/">
        <FaEnvelope />
      </Link>
      <Link to="/">
        <FaAlignJustify />
      </Link>
      <Link to="/">
        <FaBell />
      </Link>
      <Link to="/">
        <FaUserAlt />
      </Link>
    </nav>
  );
};

export default DropDownLoged;
