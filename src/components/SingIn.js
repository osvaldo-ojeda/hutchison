import { useNavigate } from "react-router-dom";

const SingIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
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
          <input
            type="password"
            placeholder="Repetir Contraseña"
            className="formInput"
          />

          <label></label>

          <input type="submit" className="formInputSubmit" value=" Sing In" />
        </form>
      </div>
    </div>
  );
};

export default SingIn;
