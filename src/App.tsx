import strings from "./res/strings";
import Statement from "./components/Statement";
import LanguageList from "./components/LanguageList";
import Footer from "./components/Footer";

function App() {
  const categories = strings.categorizedLanguages;
  const statement = strings.myStatement;
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/dheereshagrwal/colored-icons@1.7.7/src/app/ci.min.css"
        />
      </head>
      {<Statement key="statement">{statement}</Statement>}
      {categories.map((category) => (
        <LanguageList
          key={category.name}
          type={category.name}
          languages={category.languages}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
