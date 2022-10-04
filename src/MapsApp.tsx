import { PlacesProvider } from "./context";
import { Home } from "./screens";
import './styles.css'

export default function MapsApp() {
  return (
    <PlacesProvider>
      <Home />
    </PlacesProvider>
  );
}
