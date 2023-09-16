import {Link} from 'react-router-dom';
import './index.css';

const Header = () => {
    return (
        <>
            <header>
                <div className="logo">LOGO</div>
                <div className="buscar">
                    <input type="text" placeholder="Pesquisar produto..."/>
                </div>
                <div className="acoes">
                    <Link to="/cadastro">Cadastre-se</Link>
                    <Link to="/login">Entrar</Link>
                    <h6>Carrin</h6>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Início</Link>
                        </li>
                        <li>
                            <Link to="/produtos">Produtos</Link>
                        </li>
                        <li>
                            <Link to="/categorias">Categorias</Link>
                        </li>
                        <li>
                            <Link to="/meus-pedidos">Meus Pedidos</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header