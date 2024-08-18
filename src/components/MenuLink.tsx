import downloadIcon from "../assets/github-mark.svg";
import viewIcon from "../assets/linkedin-white.png";
import resume from "../assets/email.svg";

interface Props {
  key: string;
  name: string;
  imageLocation: string;
  url: string;
}

const MenuLink = ({ name, imageLocation, url }: Props) => {
  return (
    <a href={url} title={name}>
      <img className="image" src={imageLocation} />
    </a>
  );
};

export default MenuLink;
