import { strings } from "./res/strings";
import Statement from "./components/Statement";
import LanguageList from "./components/LanguageList";
import Footer from "./components/Footer";
import "./App.css";
import Navigation from "./components/Navigation";
import Menu from "./components/Menu";

function App() {
  const categories = strings.categorizedLanguages;
  const statement = strings.myStatement;
  return (
    <>
      <div className="pagewrap">
        <Navigation></Navigation>
        {/* <Menu></Menu> */}
        <Statement intro={statement.intro} body={statement.body}></Statement>
        <section className="container">
          {categories.map((category) => (
            <LanguageList
              key={category.name}
              type={category.name}
              languages={category.languages}
            />
          ))}
        </section>
      </div>
    </>
  );
}

export default App;
