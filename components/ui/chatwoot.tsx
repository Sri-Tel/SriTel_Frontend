import React, { useEffect } from 'react';

const ChatwootWidget: React.FC = () => {
  useEffect(() => {
    const loadChatwoot = () => {
      const BASE_URL = "https://app.chatwoot.com";
      const script = document.createElement("script");
      script.src = `${BASE_URL}/packs/js/sdk.js`;
      script.defer = true;
      script.async = true;

      script.onload = () => {
        (window as any).chatwootSDK.run({
          websiteToken: 'vWUbPQmzn9LcM2eGfYhUW4VV',
          baseUrl: BASE_URL,
        });
      };

      document.body.appendChild(script);
    };

    loadChatwoot();
  }, []);

  return null; // This component doesn't render anything visible
};

export default ChatwootWidget;
