import { useState } from "react";
import Language from "./Language";

interface Props {
  type: string;
  languages: { name: string; description: string }[];
}

const LanguageList = ({ type, languages }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="container-fluid">
      <h1>{type}</h1>
      {languages.length === 0 && <p>No languages found</p>}
      <ul className="nav nav-tabs">
        {languages.map((item, index) => (
          <li key={item.name} className="nav-item">
            <a
              className={
                selectedIndex === index ? "nav-link active" : "nav-link"
              }
              key={item.name}
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <Language
        name={languages.at(selectedIndex)?.name || "No name available"}
        description={
          languages.at(selectedIndex)?.description || "No description available"
        }
      ></Language>
    </div>
  );
};

export default LanguageList;
