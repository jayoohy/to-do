import { Link } from "react-router";
import Body from "../../components/theme2-components/body.component";
import Logo from "../../components/theme2-components/logo.component";
import "./theme2.styles.scss";

const Theme2 = () => {
  return (
    <>
      <div className="body">
        <Link to="/">
          <button className="btn dark-btn float-right">Theme 1</button>
        </Link>
        <Logo />
        <Body />
        <div className="footer">
          <h4>Made with ❤️ by Joy</h4>
        </div>
      </div>
    </>
  );
};

export default Theme2;
