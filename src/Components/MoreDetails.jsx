import { useState } from "react";
import { CiYoutube } from "react-icons/ci";
import { CgFileDocument } from "react-icons/cg";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import "./MoreDelails.css"; // Corrected the import filename


const MoreDetails = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleVisibility = (section) => {
    // If the clicked section is already visible, hide it; otherwise, show it
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className="more-details-container">
      <div className="section">
        <h4 className="section-title" onClick={() => toggleVisibility("html")}>
          Introduction to HTML
        </h4>
        {visibleSection === "html" && (
          <div className="section-content">
            <p className="content">HTML Video Tutorial Content goes here.</p>
            <div className="buttons">
              <button className="action-button">
                <CiYoutube /> Video Tutorial
              </button>
              <button className="action-button">
                <CgFileDocument /> Materials
              </button>
              <button className="action-button">
                <HiOutlineDocumentDuplicate /> Tasks
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="section">
        <h4 className="section-title" onClick={() => toggleVisibility("css")}>
          Introduction to CSS
        </h4>
        {visibleSection === "css" && (
          <div className="section-content">
            <p className="content">CSS Video Tutorial Content goes here.</p>
            <div className="buttons">
              <button className="action-button">
                <CiYoutube /> Video Tutorial
              </button>
              <button className="action-button">
                <CgFileDocument /> Materials
              </button>
              <button className="action-button">
                <HiOutlineDocumentDuplicate /> Tasks
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="section">
        <h4
          className="section-title"
          onClick={() => toggleVisibility("javascript")}
        >
          Introduction to JavaScript
        </h4>
        {visibleSection === "javascript" && (
          <div className="section-content">
            <p className="content">
              JavaScript Video Tutorial Content goes here.
            </p>
            <div className="buttons">
              <button className="action-button">
                <CiYoutube /> Video Tutorial
              </button>
              <button className="action-button">
                <CgFileDocument /> Materials
              </button>
              <button className="action-button">
                <HiOutlineDocumentDuplicate /> Tasks
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="section">
        <h4 className="section-title" onClick={() => toggleVisibility("react")}>
          Introduction to React
        </h4>
        {visibleSection === "react" && (
          <div className="section-content">
            <p className="content">React Video Tutorial Content goes here.</p>
            <div className="buttons">
              <button className="action-button">
                <CiYoutube /> Video Tutorial
              </button>
              <button className="action-button">
                <CgFileDocument /> Materials
              </button>
              <button className="action-button">
                <HiOutlineDocumentDuplicate /> Tasks
              </button>
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default MoreDetails;
