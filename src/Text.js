import "./Text.css";

const Text = ({
  cssClass,
  text,
  colorText,
  underline,
  fontSizeText,
  fontWeightText,
}) => {
  return (
    <p
      className="text"
      style={{
        color: colorText,
        textDecoration: underline === true ? "underline" : "none",
        fontSize: fontSizeText,
        fontWeight: fontWeightText,
      }}
    >
      {text}
    </p>
  );
};

export default Text;
