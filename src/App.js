import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Carriers from "./containers/carriers/Carriers";
import eCommerce from "./containers/eCommerce/ECommerce";
import Cloud from "./containers/cloud/Cloud";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/Carriers" component={Carriers} />
        <Route path="/eCommerce" component={eCommerce} />
        <Route path="/Cloud" component={Cloud} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
