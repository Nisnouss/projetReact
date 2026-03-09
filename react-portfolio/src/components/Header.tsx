import { Link } from "react-router-dom";
// import './styles/Header.scss';

const Header = () =>(
    <nav className="header">
        <Link to="/">Accueil</Link>
        <Link to="/projects">Projets</Link>
        <Link to="/contact">Contact</Link>
    </nav>
);

export default Header;