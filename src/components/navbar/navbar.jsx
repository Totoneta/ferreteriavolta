import "./navbar.css"
import { Link } from "react-router-dom"

export function NavBar() {

    return (
        <header className="header">

            <Link className="menu-left-a" to="/">
                <div className="menu-left">
                    <img src="/img/logo-volta/logo.png" alt="Logo Volta" className="img-menu-l" />
                </div>
            </Link>

            <nav className="navbar-container">
                <ul className="menu-right">
                    <li className="item-menu-r"><Link to="/" className="a-menu-r">Inicio</Link></li>
                    <li className="item-menu-r"><Link to="/Empresa" className="a-menu-r">Empresa</Link></li>
                    <li className="item-menu-r-vertical"><Link to="/Productos" className="a-menu-r">Productos</Link></li>
                    <li className="item-menu-r"><Link to="/Contacto" className="a-menu-r">Contacto</Link></li>
                </ul>
            </nav>


        </header>
    )
}