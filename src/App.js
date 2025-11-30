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
import Azure from "./containers/azure/Azure";
import AWS from "./containers/aws/AWS";
import Firebase from "./containers/firebase/Firebase";
import WooCommerce from "./containers/woocommerce/WooCommerce";
import Shopify from "./containers/shopify/Shopify";
import Stripe from "./containers/stripe/Stripe";
import CanadaPost from "./containers/canadapost/CanadaPost";
import Fedex from "./containers/fedex/Fedex";
import UPS from "./containers/ups/UPS";
import GLS from "./containers/gls/GLS";
import Canpar from "./containers/canpar/Canpar";
import IT from "./containers/it/IT";
import WindowsServers from "./containers/windowsservers/WindowsServers";
import ActiveDirectory from "./containers/activedirectory/ActiveDirectory";
import Security from "./containers/security/Security";
import Backups from "./containers/backups/Backups";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Carriers" component={Carriers} />
        <Route path="/Carriers/CanadaPost" component={CanadaPost} />
        <Route path="/Carriers/Fedex" component={Fedex} />
        <Route path="/Carriers/UPS" component={UPS} />
        <Route path="/Carriers/GLS" component={GLS} />
        <Route path="/Carriers/Canpar" component={Canpar} />
        <Route exact path="/eCommerce" component={eCommerce} />
        <Route path="/eCommerce/WooCommerce" component={WooCommerce} />
        <Route path="/eCommerce/Shopify" component={Shopify} />
        <Route path="/eCommerce/Stripe" component={Stripe} />
        <Route exact path="/Cloud" component={Cloud} />
        <Route path="/Cloud/Azure" component={Azure} />
        <Route path="/Cloud/AWS" component={AWS} />
        <Route path="/Cloud/Firebase" component={Firebase} />
        <Route exact path="/ERP" component={ERP} />
        <Route path="/ERP/Warehouse-Management-Systems" component={WMS} />
        <Route path="/ERP/Transportation-Management-Systems" component={TMS} />
        <Route path="/ERP/EDI" component={EDI} />
        <Route exact path="/IT" component={IT} />
        <Route path="/IT/Windows-Servers" component={WindowsServers} />
        <Route path="/IT/Active-Directory" component={ActiveDirectory} />
        <Route path="/IT/Security" component={Security} />
        <Route path="/IT/Backups" component={Backups} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
