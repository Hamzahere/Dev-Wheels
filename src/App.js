import "./App.css";
import Routes from "./Routes";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import { Footer } from "./components/Footer";
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
