import { useEffect } from "react";

const Metricool = () => {
  useEffect(() => {
    const loadScript = (callback) => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://tracker.metricool.com/resources/be.js";
      script.async = true;
      script.onload = callback;
      document.head.appendChild(script);
    };

    loadScript(() => {
      if (window.beTracker) {
        window.beTracker.t({ hash: "dd650d20681c31eabc0302ea34a217e0" });
      }
    });
  }, []);

  return null;
};

export default Metricool;
