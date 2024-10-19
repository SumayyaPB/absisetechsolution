import { Link, useParams } from 'react-router-dom';
import fullStack from '../assets/full-stackimg.jpg';
import './CourseDetailed.css'; 
import CourseTabs from './CourseTabs.jsx';
import { CiClock1 } from "react-icons/ci";
import Footer from './Footer.jsx';

const CourseDetailed = () => {
  const { course } = useParams();

  return (
    <div className="course-detailed-container">
      <div className="course-content d-flex">
        <div className='course-img'>
        <h4>{course.replace('-', ' ')}</h4>
        <img src={fullStack} alt="Course Illustration" className="courseImage" />
        </div>
        
        <div className="course-text">
          <h2>{course.replace('-', ' ')}</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias debitis
            doloribus necessitatibus exercitationem molestias magni ullam, voluptatem
            consectetur nemo inventore aperiam illo itaque, sapiente, quidem dolorem
            saepe iusto incidunt beatae quas amet neque dolorum! Delectus qui impedit
            aliquam officiis. Vero.
          </p>
          <div className='d-flex justify-content-between'>
          
          <p><CiClock1 />Total Hours</p>
          <Link to='/courses/:course/coursedetails'>
          <button className='course-detailedbtn'>Start Learning</button>
          </Link>
          </div>
        </div>
      </div>
      <div>
      <CourseTabs className='tabs'/>
      </div>
      <div>
        <hr />
      <Footer/>
      </div>
    </div>
  );
};

export default CourseDetailed;
