import { Link } from "react-router-dom"
import './Header.css'
import Logo from '../../assets/LogoMain.png'
const Header = () => {
  return (
    <header className="header">
        <img src={Logo} alt=""  className="header-log"/>
        <ul className="menu-header">
            <li >
                <Link to='/' className="menu-item">Home</Link>
            </li>
            <li>
                <Link to='/newvideo' className="menu-item active">Nuevo video</Link>
            </li>

        </ul>

    </header>
  )
}

export default Header