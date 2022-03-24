import "./assets/css/style.css";
import "./assets/css/animate.min.css";
// import './assets/css/bootstrap.min.css'

import "./assets/plugins/pace/pace-theme-flash.css";
import "./assets/plugins/bootstrap/css/bootstrap.min.css";
import "./assets/plugins/bootstrap/css/bootstrap-theme.min.css";
// import "./assets/fonts/font-awesome:css/font-awesome.css"
// import "./assets/fonts/webfont/cryptocoins.css"
import "./assets/css/animate.min.css";
import "./assets/plugins/perfect-scrollbar/perfect-scrollbar.css";

// import "./assets/fonts/webfont/cryptocoins.css"
// import "./assets/fonts/webfont/cryptocoins-colors.css"

import "./assets/plugins/jvectormap/jquery-jvectormap-2.0.1.css";
import "./assets/plugins/morris-chart/css/morris.css";
import "./assets/css/responsive.css";
import "./assets/css/react-transfer-css.css";

import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import HomePage from "./components/pages/HomePage";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TradingView from "./components/TradingView";
import BuySell from "./components/BuySell";
import PaymentGateways from "./components/PaymentGateways";
import MyWallet from "./components/MyWallet";
import Security from "./components/Security";
import GeneralSettings from "./components/settings/GeneralSettings";
import AccountConfirmation from "./components/settings/AccountConfirmation";
import Login from "./components/access-pages/Login";
import Registration from "./components/access-pages/Registration";
import Page404 from "./components/access-pages/Page404";
import Faq from "./components/support/Faq";
import HelpCenter from "./components/support/HelpCenter";

function App() {
  return (
    <BrowserRouter>
      <div className="pace-done">
        <TopBar />
        <div className="page-container row-fluid container-fluid">
          <SideBar />
          <section id="main-content">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/tradingView" element={<TradingView />} />
              <Route path="/buy-and-sell" element={<BuySell />} />
              <Route path="/payment-gateway" element={<PaymentGateways />} />
              <Route path="/my-wallet" element={<MyWallet />} />
              <Route path="/security" element={<Security />} />
              <Route path="/general-settings" element={<GeneralSettings />} />
              <Route
                path="/account-confirmation"
                element={<AccountConfirmation />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/404" element={<Page404 />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/help-center" element={<HelpCenter />} />
            </Routes>
          </section>
        </div>
      </div>{" "}
    </BrowserRouter>
  );
}

export default App;
