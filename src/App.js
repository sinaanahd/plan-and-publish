import "./asset/css/index.scss";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Home from "./components/Home/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Pricing from "./components/pricing/pricing";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pricing" exact component={Pricing} />
        <Redirect to="/not-found" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
