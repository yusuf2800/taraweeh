const Header = () => {
  const difference1 = Math.ceil(
    (new Date("2025-02-28") - new Date()) / (1000 * 60 * 60 * 24)
  );
  const difference2 = Math.ceil(
    (new Date("2025-02-29") - new Date()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div>
      <div className="header-container text">
        <label
          className="daysLeft"
          style={{
            fontSize: "37px",
            position: "fixed",
            backgroundColor: "#ffecd4",
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "70px",
            boxShadow: "0 4px 5px rgba(0, 0, 0, 0.3",
          }}
        >
          Days left: {difference1}/{difference2}
        </label>
      </div>
    </div>
  );
};

export default Header;
