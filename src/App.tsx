import { useEffect } from 'react'
import './App.css'
// import LogIn from './Pages/LogIn'
import Dashboard from './Pages/DashBoard'

declare global {
  interface Window {
    chatwootSDK: {
      run: (config: { websiteToken: string; baseUrl: string }) => void;
    };
  }
}

function App() {
  useEffect(() => {
    (function (d, t) {
      var BASE_URL = "https://app.chatwoot.com";
      var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
      (g as HTMLScriptElement).src = BASE_URL + "/packs/js/sdk.js";
      (g as HTMLScriptElement).defer = true;
      (g as HTMLScriptElement).async = true;
      if (s.parentNode) {
        s.parentNode.insertBefore(g, s);
      }
      g.onload = function () {
        window.chatwootSDK.run({
          websiteToken: 'Jqsp2abDWsyWsQYSc47kx7Jo',  // Your Chatwoot website token
          baseUrl: BASE_URL,  // Base URL for Chatwoot instance
        });
      };
    })(document, "script");
  }, []); // Empty dependency array to ensure it only runs once on mount

  return (
    <div>
      <Dashboard />
    </div>
  );
}

export default App;
