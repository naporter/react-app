import downloadIcon from "../assets/download.svg";
import viewIcon from "../assets/view.svg";
import resume from "../res/resume.pdf";

interface Props {
  key: string;
}

const Navigation = () => {
  return (
    <nav className="nav-bar">
      <div id="menu-btn" className="nav-item nav-menu">
        {/*TODO: add in Menu */}
      </div>
      <p className="nav-item nav-resume">Check out my resume!</p>
      <a
        className="nav-item"
        href={resume}
        download="Nathan_Porter-Software_Developer-Resume"
      >
        <img className="image" src={downloadIcon}></img>
      </a>
      <a className="nav-item" href={resume} target="_blank">
        <img className="image" src={viewIcon}></img>
      </a>
    </nav>
  );
};

export default Navigation;
