import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav.js";
import Search from "./components/Search";
import Results from "./components/Results";

function App() {
  return (
    <>
      <Nav />
      <Search />
      <Results />
    </>
  );
}

export default App;
