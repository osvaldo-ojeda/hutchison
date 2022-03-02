import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="inMainDiv">
      <h2>Bienvenidos al PPC</h2>
      <div className="formContainer ">
        <div className="circleContainer">
          <div className="circle1">
            <div className="circle2">
              <div className="circle3"></div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <label></label>
          <input
            type="text"
            placeholder="Usuario"
            className="formInput first"
          />

          <label></label>
          <input
            type="password"
            placeholder="Contraseña"
            className="formInput"
          />

          <label></label>
          <select className="formInput">
            <option value="Repetir Contraseña">
              Seleccione una base de datos
            </option>
          </select>
          <label className="check">
            <input type="checkbox" />
            Recuerdame{" "}
          </label>

          <input type="submit" className="formInputSubmit" value=" Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
