import React from "react";
import ReactDOM from "react-dom/client";
import MapsApp from "./MapsApp";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWd1c3RpbmcxOSIsImEiOiJjbDh2dmNmb2YwaHZoM3BvOG9wOGRhdDFyIn0.H9txdbJ9Ca5EXYWt_amPTQ";

if (!mapboxgl.supported()) {
  alert("Your browser does not support Mapbox GL");
  throw new Error("Your browser does not support Mapbox GL");
}

if (!navigator.geolocation) {
  alert("Your browser does not have Geolocation");
  throw new Error("Your browser does not have Geolocation");
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
