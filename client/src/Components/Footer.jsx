import React from "react"; 
const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By
        <span>❤️</span>
        <a href="linkedin.com/in/khushi-rathore-5363a8257" target="_blank">
          Khushi Rathore
        </a>
        <span>&copy;</span>
        {year}
        <strong>
          FoodRender
        </strong>
      </div>
    );
  };
export default Footer;
  