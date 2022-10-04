import { useReducer } from "react";
import { Map, Marker, Popup } from "mapbox-gl";
import { MapContext } from "./MapContext";
import { mapReducer } from "./mapReducer";

export interface MapState {
  isMapReady: boolean;
  map?: Map;
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: MapState = {
  isMapReady: false,
  map: undefined,
};

export function MapProvider({ children }: Props) {
  const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);

  const setMap = (map: Map) => {
    const myLocationPopup = new Popup({ offset: 25 }).setHTML(
      `<h4>My Location: </h4>
      <p>Latitude: ${map.getCenter().lat}</p>
      <p>Longitude: ${map.getCenter().lng}</p>`
    );

    new Marker({
      color: "#61dafb",
    })
      .setLngLat(map.getCenter())
      .setPopup(myLocationPopup)
      .addTo(map);

    dispatch({ type: "setMap", payload: map });
  };

  return (
    <MapContext.Provider
      value={{
        ...state,
        setMap,
      }}
    >
      {children}
    </MapContext.Provider>
  );
}
