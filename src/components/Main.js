import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SingIn from "./SingIn";
import Dashboard from "./Dashboard";
import Table from "./Table";

const Main = () => {
  let param = useLocation();
  const [inMain, setInMain] = useState("");

  useEffect(() => {
    if (param.pathname === "/login" || param.pathname === "/singin") {
      setInMain("inMain");
    } else if (param.pathname === "/") {
      setInMain("");
    } else {
      setInMain("panel");
    }
  }, [param]);

  return (
    <main className={inMain}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singin" element={<SingIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </main>
  );
};

export default Main;
