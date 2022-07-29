import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="contacts">
        <div>
          <p className="foottitle">Pages</p>
          <p>Topics</p>
          <p>courseXpert</p>
          <p>Blog</p>
        </div>
        <div>
          <p className="foottitle">Get Listed</p>
          <p>Join the Network</p>
          <p>CourseXpert API Documentation</p>
          <p>Dashboard</p>
        </div>
        <div>
          <p className="foottitle">Company</p>
          <p>Contact us</p>
        </div>
        <div>
          <p className="foottitle">Legal</p>
          <p>Terms and Services</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <div>
            <p className="foottitle">Follow us</p>
            <div className="social">
              <img
                src="http://assets.stickpng.com/images/60fea6773d624000048712b5.png"
                alt=""
              />
              <img src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/displaying-19-gallery-images-for-linkedin-logo-png-25.png" alt="" />
              <img src="https://www.seekpng.com/png/full/201-2012055_free-instagram-circle-icon-png-instagram-logo-black.png" alt="" />
              <img src="https://www.pngkey.com/png/full/918-9188843_nl-twitter-twitter-icon-gray-circle.png" alt="" />
            </div>
          </div>
          <div className="site">
            <p className="foottitle">Site</p>
            <select>
              <option value="">English</option>
              <option value="">Espanol</option>
              <option value="">Portugese</option>
            </select>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2022 CourseXpert</p>
        <div><img src="https://avatars.githubusercontent.com/u/49002615?s=200&v=4"/>
        <p>CourseXpert</p></div>
      </div>
    </div>
  );
};
