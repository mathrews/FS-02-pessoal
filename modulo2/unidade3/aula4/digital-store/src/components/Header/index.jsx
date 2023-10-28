import { Link, NavLink } from "react-router-dom";
import "./index.css";
import cart from "./assets/Buy.svg";
import menuHamb from "./assets/MenuHamburguer.svg";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
    //   const location = useLocation(); // mostra a rota atual
    const { userInfo, setUserInfo } = useContext(AuthContext);

    return (
        <>
            <header>
                <div className="menu">
                    <img src={menuHamb} />
                </div>

                <div className="logo">
                    <div className="logo-icon"></div>
                    Digital Store
                </div>

                <div className="buscar">
                    <input
                        type="text"
                        placeholder="Pesquisar produto..."
                        className="inputBuscar"
                    />
                    <button></button>
                </div>

                <div className="acoes">
                    {userInfo.isLogged || (
                        <>
                            <Link
                                className="underlined"
                                to="/cadastro">
                                Cadastre-se
                            </Link>
                            <Link
                                className="btn"
                                to="/login">
                                Entrar
                            </Link>
                        </>
                    )}

                    <div className="carrinho">
                        <img src={cart} />
                        <span>0</span>
                    </div>

                    {userInfo.isLogged && (
                        <h3>
                            Ola {userInfo.name}
                            <span onClick={() => setUserInfo({...userInfo, isLogged: false})}>Sair</span>
                        </h3>
                    )}
                </div>

                <nav>
                    <ul>
                        <li>
                            <NavLink //verificação implicita insere o active
                                to="/">
                                Início
                            </NavLink>
                        </li>
                        <li>
                            <NavLink //verificação implicita insere o active
                                to="/produtos">
                                Produtos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink //verificação implicita insere o active
                                to="/categorias">
                                Categorias
                            </NavLink>
                        </li>
                        <li>
                            {userInfo.isLogged && (
                                <NavLink //verificação implicita insere o active
                                    to="/meus-pedidos">
                                    Meus Pedidos
                                </NavLink>
                            )}
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
