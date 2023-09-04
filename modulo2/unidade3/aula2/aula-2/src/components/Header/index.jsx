import './index.css'

const Header = (props) => {

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/sobre">Sobre</a>
            </li>
            <li>
              <button onClick={props.logar}>Logar</button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header