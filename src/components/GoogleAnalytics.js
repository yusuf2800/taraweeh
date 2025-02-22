import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const useGoogleAnalytics = (trackingId) => {
  const location = useLocation();

  useEffect(() => {
    if (!trackingId) return;

    ReactGA.initialize(trackingId);
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location, trackingId]);
};

export default useGoogleAnalytics;
