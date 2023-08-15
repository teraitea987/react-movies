import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="navigation">
                <div className="navigation-left">
                    <NavLink
                        to={"/"}
                        className={(nav) =>
                            nav.isActive ? "nav-active hover" : "hover"
                        }
                    >
                        Accueil
                    </NavLink>
                    <NavLink
                        to={"/favoris"}
                        className={(nav) =>
                            nav.isActive ? "nav-active hover" : "hover"
                        }
                    >
                        Coup de coeur
                    </NavLink>
                </div>
                <h1  className="logo center">React Movies</h1>
            </div>
        </header>
    );
};

export default Header;
