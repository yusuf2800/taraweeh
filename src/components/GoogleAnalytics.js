import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useGoogleAnalytics = (trackingId) => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", trackingId, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location, trackingId]);
};

export default useGoogleAnalytics;
