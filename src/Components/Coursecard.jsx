import './Coursecard.css';
import { PiBatteryMediumFill } from "react-icons/pi";
import { BiBook } from "react-icons/bi";
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Coursecard = ({ heading }) => {  
  return (
    <div className="card-container">
      <img
        src="https://www.shutterstock.com/image-vector/programming-courses-web-design-concept-260nw-1918015178.jpg"
        alt="Course Illustration"
      />
      <h1>{heading}</h1>
      <div className='d-flex icon-btn justify-content-between w-100'>
        <div className='d-flex flex-row gap-2'>
          <BiBook className='icn-btn' />
          <PiBatteryMediumFill className='icn-btn' />
        </div>
        
        <Link className="link" to={`/courses/${heading}`}>
          <button>Start Learning {heading || 'Course'}</button>
        </Link>
      </div>
    </div>
  );
};

export default Coursecard;
