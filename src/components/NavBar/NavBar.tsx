import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <NavLink to="/" className="navbar-brand">Page</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/features" className="nav-link">Features</NavLink>
                        <NavLink to="/pricing" className="nav-link">Pricing</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
