import React from "react";

const Graph = () => {
  return (
    <>
      <div className="col-xs-12">
        {/* <script type="text/javascript">
        baseUrl = "https://widgets.cryptocompare.com/";
        var scripts = document.getElementsByTagName("script");
        var embedder = scripts[scripts.length - 1];
        var cccTheme = { "General": { "background": "rgba(68, 70, 79, 0.5)", "borderWidth": "0px", "textColor": "#c0c4c8" }, "Chart": { "fillColor": "rgba(255, 180, 38, 1)" }, "Conversion": { "color": "#848c94" } };
        (function () {
            var appName = encodeURIComponent(window.location.hostname);
            if (appName == "") { appName = "local"; }
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            var theUrl = baseUrl + 'serve/v3/coin/chart?fsym=BTC&tsyms=USD,EUR,CNY,GBP';
            s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
            embedder.parentNode.appendChild(s);
        })();
    </script> */}
      </div>

      <div className="clearfix"></div>
    </>
  );
};

export default Graph;
