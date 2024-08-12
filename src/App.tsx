import strings from "./res/strings";
import Statement from "./components/Statement";
import LanguageList from "./components/LanguageList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const categories = strings.categorizedLanguages;
  const statement = strings.myStatement;
  return (
    <>
      <div className="container">
        {<Statement key="statement">{statement}</Statement>}
        {categories.map((category) => (
          <LanguageList
            key={category.name}
            type={category.name}
            languages={category.languages}
          />
        ))}
        <Footer />
      </div>
    </>
  );
}

export default App;
