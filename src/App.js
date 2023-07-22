import "./App.css";
import Routes from "./Routes";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import PageHeader from "./components/pageHeader";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <TopBar/> */}
        <NavBar />
        <PageHeader />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
