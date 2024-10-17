import './HomePage.css'
import Coursecard from "../Components/Coursecard";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="card-wrapper">
        <Coursecard heading="Full Stack Development" />
        <Coursecard heading="Front End Development" />
        <Coursecard heading="Back End Development" />
      </div>
    </div>
  );
};

export default HomePage;
