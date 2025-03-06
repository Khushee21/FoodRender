import React from "react"; 
const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By
        <span>❤️</span>
        <a href="https://www.linkedin.com/feed/" target="_blank">
          Khushi Rathore
        </a>
        <span>&copy;</span>
        {year}
        <strong>
          Tasty <span>Trails</span>
        </strong>
      </div>
    );
  };
export default Footer;
  