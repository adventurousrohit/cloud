"use client";

import React, { useEffect, useState } from "react";

const ChatWidget = () => {
  const [isChatLoaded, setIsChatLoaded] = useState(false);

  useEffect(() => {
    // Load Tawk.to script globally
    const tawkScript = document.createElement("script");
    tawkScript.src = "https://embed.tawk.to/5e108e8027773e0d832bd4ff/default";
    tawkScript.async = true;
    tawkScript.charset = "UTF-8";
    tawkScript.setAttribute("crossorigin", "*");

    document.body.appendChild(tawkScript);

    tawkScript.onload = () => {
      setIsChatLoaded(true);
    };

    return () => {
      document.body.removeChild(tawkScript);
    };
  }, []);

  // Function to open chat
  window.openChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.toggle();
    }
  };

  return null; // No UI needed since Tawk.to injects the chat widget
};

export default ChatWidget;
