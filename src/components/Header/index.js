// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-section">
    <div className="website-logo">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-icon"
      />
      <p className="header-section-text">Wave</p>
    </div>

    <ul className="header-names">
      <Link className="header-section-text" to="/">
        Home
      </Link>
      <Link className="header-section-text" to="/about">
        About
      </Link>
      <Link className="header-section-text" to="/contact">
        Contact
      </Link>
    </ul>
  </div>
)

export default Header
