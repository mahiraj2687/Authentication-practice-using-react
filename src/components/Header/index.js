import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header_container">
    <Link to="/">
      <p className="home_about">Home</p>
    </Link>
    <Link to="/about">
      <p className="home_about">About</p>
    </Link>
  </div>
)

export default Header
