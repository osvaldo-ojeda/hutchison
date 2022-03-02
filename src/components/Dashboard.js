import NavBar from "./NavBar";
import Card from "./Card";
import panelsFackeData from "../utils/panelsFackeData";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className="dashboard">
        <h2>Panels and Wells</h2>
        <hr />
        <section className="cardContainer">
          {panelsFackeData.map((panel ) => (
            <Card key={panel.id} panel={panel} />
          ))}
          
        </section>
      </div>
    </>
  );
};

export default Dashboard;
