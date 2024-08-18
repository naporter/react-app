import MenuLink from "./MenuLink";
import { menuLinks } from "../res/strings";
import downloadIcon from "../assets/github-mark.svg";
import viewIcon from "../assets/linkedin-white.png";
import resume from "../assets/email.svg";

const Menu = () => {
  return (
    <div className="menu">
      {menuLinks.links.map((item) => (
        <MenuLink
          key={item.name}
          name={item.name}
          imageLocation={item.imageLocation}
          url={item.url}
        />
      ))}
    </div>
  );
};

export default Menu;
