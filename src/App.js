import logo from "./logo.svg";

import "./App.css";
import ResponsiveAppBar from "./components/Navbar";
import Search from "./components/Search";
import MultiActionAreaCard from "./components/RecipeCard";
import Container from "./components/CardContainer";
import {GlobalProvider} from './components/GlobalContext'
function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <ResponsiveAppBar />
        <Search />
        <Container />
      </div>
    </GlobalProvider>
  );
}
export default App;
