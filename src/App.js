import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News, Footer } from "./components";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/exchanges" component={Exchanges} />
                <Route path="/cryptocurrencies" component={Cryptocurrencies} />
                <Route path="/crypto/:coinId" component={CryptoDetails} />
                <Route path="/news" component={News} />
              </Switch>
            </div>
          </Layout>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
