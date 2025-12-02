import "./Header.css";

export const Header = () => {
  return (
    <header className="header-container">
      <img className="logo-img" src="./logo.svg" alt="Logo" />
      <a className="btn-primary" href="#">
        Premium
      </a>
    </header>
  );
};
