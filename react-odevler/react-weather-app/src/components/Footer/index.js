import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <div className={`col-12 align-self-center ${theme ? "text-light" : ""}`}>
        <p>
          developed by{" "}
          <a
            style={{ color: "black", textDecoration: "none" }}
            href="https://github.com/emirhancirmencik"
            className={`${theme ? "text-muted" : ""}`}
          >
            emirhan çirmencik
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
