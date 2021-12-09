import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main"></div>
        <div className="footer"></div>
      </div>
    </BrowserRouter>
  );
};

export default App;
