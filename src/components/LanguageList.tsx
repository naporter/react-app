import { useState } from "react";
import Language from "./Language";

interface Props {
  type: string;
  languages: { name: string; description: string }[];
}

const LanguageList = ({ type, languages }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1 className="grid-header">{type}</h1>
      <div className="grid-container">
        {languages.length === 0 && <p>No languages found</p>}
        {languages.map((item, index) => (
          <Language
            key={item.name}
            name={item.name || "No name available"}
            description={item.description || "No description available"}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default LanguageList;
