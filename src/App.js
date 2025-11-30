import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Carriers from "./containers/carriers/Carriers";
import eCommerce from "./containers/eCommerce/ECommerce";
import Cloud from "./containers/cloud/Cloud";
import WMS from "./containers/WMS/WMS";
import ERP from "./containers/ERP/ERP";
import TMS from "./containers/TMS/TMS";
import EDI from "./containers/EDI/EDI";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/Carriers" component={Carriers} />
        <Route path="/eCommerce" component={eCommerce} />
        <Route path="/Cloud" component={Cloud} />
        <Route exact path="/ERP" component={ERP} />
        <Route path="/ERP/Warehouse-Management-Systems" component={WMS} />
        <Route path="/ERP/Transportation-Management-Systems" component={TMS} />
        <Route path="/ERP/EDI" component={EDI} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
