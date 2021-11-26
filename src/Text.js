import "./App.css";

const Text = ({ text, colorText, underline, fontSizeText, fontWeightText }) => {
  return (
    <p
      className="text"
      style={{
        textAlign: "center",
        color: colorText,
        textDecoration: underline === true ? "underline" : "none",
        fontSize: fontSizeText,
        fontWeight: fontWeightText,
        margin: "2rem",
      }}
    >
      {text}
    </p>
  );
};

export default Text;
