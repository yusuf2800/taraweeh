const Header = () => {
  const difference1 = Math.ceil(
    (new Date("2025-02-28") - new Date()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div>
      <div className="header-container text">
        <label
          className="daysLeft"
          style={{
            fontSize: "37px",
            position: "fixed",
            top: "0",
            backgroundColor: "#ffecd4",
            left: "0",
            right: "0",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            height: "70px",
            boxShadow: "0 4px 5px rgba(0, 0, 0, 0.3",
          }}
        >
          Days left: {difference1}/{difference1 + 1}
        </label>
      </div>
    </div>
  );
};

export default Header;
