import { MapProvider, PlacesProvider } from "./context";
import { Home } from "./screens";
import "./styles.css";

export default function MapsApp() {
  return (
    <PlacesProvider>
      <MapProvider>
        <Home />
      </MapProvider>
    </PlacesProvider>
  );
}
