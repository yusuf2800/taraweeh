import "./Header.css"

const Header = () => {
  const difference1 = Math.ceil(
    (new Date("2025-02-28") - new Date()) / (1000 * 60 * 60 * 24)
  );

  return (
    <header className="header-container text">
      <label className="daysLeft">
        Days Until Ramadan: {difference1}/{difference1 + 1}
      </label>
    </header>
  );
};

export default Header;
