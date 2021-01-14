import React from 'react';
import "./footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-list-div">
          <ul className="footer-list">
            Developed by:
            <li>
              <a href="https://github.com/ChristopherJose707">Christopher Jose</a>
            </li>
            <li>
              <a href="https://github.com/RizzaCarla">Rizza Marzo</a>
            </li>
            <li>
              <a href="https://github.com/SanYung">San Yung</a>
            </li>
            <li>
              <a href="https://github.com/kevinpark02">Kevin Park</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;