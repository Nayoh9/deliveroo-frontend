import logoteal from "../assets/images/logo-teal.svg";

const Header = (logo) => {
  return (
    <header>
      <img src={logoteal} alt="" className="logo" />
    </header>
  );
};

export default Header;
