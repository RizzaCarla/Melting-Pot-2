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
              <a href="https://github.com/ChristopherJose707" target="_blank">
                Christopher Jose
              </a>
            </li>
            <li>
              <a href="https://github.com/RizzaCarla" target="_blank">
                Rizza Marzo
              </a>
            </li>
            <li>
              <a href="https://github.com/SanYung" target="_blank">
                San Yung
              </a>
            </li>
            <li>
              <a href="https://github.com/kevinpark02" target="_blank">
                Kevin Park
              </a>
            </li>
            <li>
              <a href="https://github.com/ChristopherJose707/Melting-Pot" target="_blank">Github Repo</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;