import './assets/css/style.css'
import './assets/css/animate.min.css'
// import './assets/css/bootstrap.min.css'


import "./assets/plugins/pace/pace-theme-flash.css"
import "./assets/plugins/bootstrap/css/bootstrap.min.css"
import "./assets/plugins/bootstrap/css/bootstrap-theme.min.css"
// import "./assets/fonts/font-awesome:css/font-awesome.css"
// import "./assets/fonts/webfont/cryptocoins.css"
import "./assets/css/animate.min.css"
import "./assets/plugins/perfect-scrollbar/perfect-scrollbar.css"

// import "./assets/fonts/webfont/cryptocoins.css"
// import "./assets/fonts/webfont/cryptocoins-colors.css"


import "./assets/plugins/jvectormap/jquery-jvectormap-2.0.1.css"
import "./assets/plugins/morris-chart/css/morris.css"
import "./assets/css/responsive.css"
import "./assets/css/react-transfer-css.css"



import TopBar from './components/top-bar';
import SideBar from './components/side-bar'
import HomePage from './pages/home-page'


function App() {
  return (
    <div className="pace-done">
      <TopBar />
      <div class="page-container row-fluid container-fluid">
        <SideBar />
        <section id="main-content" >
          {/* <switch>
            <Route exact path="/" component={HomePage} />
          </switch> */}
          <HomePage />
        </section>
      </div>
    </div>
  );
}

export default App;
