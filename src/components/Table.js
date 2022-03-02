import NavBar from "./NavBar";
import Navigation from "./Navigation";
import TableInpust from "./TableInpust";
import tableFackeData from "../utils/tableFackeData";

const Table = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="tablePull">
        <TableInpust />
       
          <table>
            <thead>
              <tr key="">
                <th>Rendering engine</th>
                <th>Browser</th>
                <th>Platfomr(s)</th>
                <th>Engine version</th>
                <th>CSS grade</th>
              </tr>
            </thead>
            <tbody>
              {tableFackeData.map((data) => (
                <tr key={data.id}>
                  <td>{data.renderin}</td>
                  <td>{data.browser}</td>
                  <td>{data.platform}</td>
                  <td>{data.engine}</td>
                  <td className="tdWithBtn">{data.css} <button className="danger">Eliminar</button> </td>
                </tr>
              ))}
            </tbody>
          </table>
       
        <div className="pullapart">
          <p>Showing 1 to 10 de 57 entries</p>

          <Navigation />
        </div>
      </div>
    </>
  );
};

export default Table;
