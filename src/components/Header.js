import logoPath from '../images/logo.svg';

function Header() {
  return (
    <header class="header">
      <img src={logoPath} alt="логотип." class="header__logo" />
    </header>
  );
}

export default Header;
