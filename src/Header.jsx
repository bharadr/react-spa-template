import './Header.css'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
        <div className="headerSection">
            <p className="title"><Link to='/'>TITLE</Link></p>
            <p className="headerButton"><Link to='/about'>About</Link></p>
        </div>
    </div>
  );
}

export default Header;
