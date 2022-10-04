import { createContext } from "react";
import { Map } from "mapbox-gl";

interface MapContextPros {
  isMapReady: boolean;
  map?: Map;

  // Methods
  setMap: (map: Map) => void;
}

export const MapContext = createContext({} as MapContextPros);
