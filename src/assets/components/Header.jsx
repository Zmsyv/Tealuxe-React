function Header() {
  return (
    <header className="header container">
      <a href="#" className="logo">
        <img src="./src/assets/images/logo.svg" alt="" />
      </a>
      <nav className="header-nav">
        <ul className="header-content">
          <li className="header-title">
            <a href="" className="header-link">
              Black
            </a>
          </li>
          <li className="header-title">
            <a href="" className="header-link">
              Green
            </a>
          </li>
          <li className="header-title">
            <a href="" className="header-link">
              White
            </a>
          </li>
          <li className="header-title">
            <a href="" className="header-link">
              Oolong
            </a>
          </li>
          <li className="header-title">
            <a href="" className="header-link">
              Pu-erh
            </a>
          </li>
        </ul>
      </nav>
      <div class="header-action">
        <a className="icon" href="">
          <img src="./src/assets/images/icon3.svg" alt="" />
        </a>
        <a className="icon" href="">
          <img src="./src/assets/images/icon4.svg" alt="" />
        </a>
        <a className="icon search-icon" href="">
          <img src="./src/assets/images/icon5.svg" alt="" />
        </a>
      </div>
    </header>
  );
}

export default Header;
