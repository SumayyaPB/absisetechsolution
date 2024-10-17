import { useState } from 'react';
import './CourseTabs.css'

const CourseTabs = () => {

  const [activeTab, setActiveTab] = useState('Overview');

  
  const tabContent = {
    Overview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod laboriosam ut suscipit aliquam eligendi exercitationem ab facere, rem a. Fugiat illo tempora, sunt voluptatibus ipsa maxime numquam est quos!',
    'Q&A': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis non voluptate ipsa, incidunt a rem error possimus dolores sequi est et laudantium molestias impedit mollitia recusandae in quibusdam explicabo facere?',
    Notes: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, libero enim repudiandae quod provident harum ab voluptate velit, fugit ea quo praesentium eveniet, voluptatem magni ut repellat ex. In, voluptate!',
    Announcement: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum animi, accusantium, nihil fugiat ab ducimus maiores officia, illo possimus repellendus pariatur ea quibusdam. Aliquam magnam quis ad similique explicabo accusamus?',
    Reviews: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo debitis non labore tempora, velit quod animi in rem voluptate mollitia praesentium vitae. Eligendi magnam quos maxime quasi architecto quaerat illum.',
    'Learning Tool': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quam, molestias quia nemo quibusdam autem illum obcaecati voluptates qui maxime asperiores libero delectus sequi eius dolorum ullam. Atque, vel itaque!',
  };

  return (
    <div className="tabs-container">
      
      

      
      <div className="tab-content">
      <ul className="tabs-menu">
        {Object.keys(tabContent).map((tab) => (
          <li
            key={tab}
            className={`tab-item ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
        <p>{tabContent[activeTab]}</p>
      </div>
    </div>
  );
};

export default CourseTabs;
