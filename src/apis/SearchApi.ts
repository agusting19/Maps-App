import axios from "axios";

const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    limit: 4,
    lenguaje: "en",
    access_token:
      "pk.eyJ1IjoiYWd1c3RpbmcxOSIsImEiOiJjbDh1OTZtcGIwMW9jM3dxcXhxcHRic3luIn0.srHEQvtYdjuquejzmdM5aw",
  },
});

export default searchApi;
