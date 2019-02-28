import React from "react";
import "./Footer.css";

const footer = () => {
  return (
    <div>
      <div className="stickyfooter">
        <footer className="page-footer font-small bg-dark pt-4 ">
          <div className="container">
            <ul className="list-unstyled list-inline text-center">
              <li className="list-inline-item" href="www.twitter.com">
                <a
                  className="btn-floating btn-tw mx-1"
                  id="footerlinks"
                  href="https://twitter.com/rootfaheem"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"> </i>
                </a>
              </li>
              <li className="list-inline-item" href="www.twitter.com">
                <a
                  className="btn-floating btn-github mx-1"
                  id="footerlinks"
                  href="https://github.com/FaheemTech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"> </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn-floating btn-google mx-1"
                  id="footerlinks"
                  href="mailto:faheemtech1@gmail.com?Subject=Hello%20faheem"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-google"> </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn-floating btn-li mx-1"
                  id="footerlinks"
                  href="https://www.linkedin.com/in/faheem-ahmad-753705127/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"> </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn-floating btn-dribbble mx-1"
                  id="footerlinks"
                  href="https://dribbble.com/faheemtech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-dribbble"> </i>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-copyright text-center py-3" id="footerlinks">
            <a className="footerlinks" id="footerlinks" href="/">
              &copy; {new Date().getFullYear()} faheem
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default footer;
