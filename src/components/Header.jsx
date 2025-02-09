const Header = () => {
  const difference1 = Math.ceil(
    (new Date("2025-02-28") - new Date()) / (1000 * 60 * 60 * 24)
  );

  return (
    <header className="header-container text">
      <label
        className="daysLeft"
        style={{
          fontSize: "28px",
          top: "0",
          left: "0",
          backgroundColor: "#fdecd3",
          opacity: "0.95",
          right: "0",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          height: "70px",
          boxShadow: "0 4px 5px rgba(0, 0, 0, 0.3",
          padding: "5px 5px 5px 5px",
          position: "absolute"
        }}
      >
        Days Until Ramadhan: {difference1}/{difference1 + 1}
      </label>
    </header>
  );
};

export default Header;
