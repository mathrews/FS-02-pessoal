import './index.css'

const Header = () => {
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
              <button>Logar</button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header