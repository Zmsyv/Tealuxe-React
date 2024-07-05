import HeaderNav from "./HeaderNav";

function Header() {
  return (
    <header className="header container">
      <a href="#" className="logo">
        <img src="./src/assets/images/logo.svg" alt="" />
      </a>
      <nav className="header-nav">
        <HeaderNav />
      </nav>
      <div className="header-action">
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
