import './HomePage.css'
import Coursecard from "../Components/Coursecard";
import Footer from '../Components/Footer';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="card-wrapper">
        <Coursecard heading="Full Stack Development" />
        <Coursecard heading="Front End Development" />
        <Coursecard heading="Back End Development" />
      </div>
      <hr />
      <Footer/>
    </div>
  );
};

export default HomePage;
