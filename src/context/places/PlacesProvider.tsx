import { useEffect, useReducer } from "react";
import { placesReducer } from "./placesReducer";
import { PlacesContext } from "./PlacesContext";
import { getUserLocation } from "../../helpers";
import { searchApi } from "../../apis";

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
};

export function PlacesProvider({ children }: Props) {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

  useEffect(() => {
    getUserLocation().then((lngLat) =>
      dispatch({ type: "setUserLocation", payload: lngLat })
    );
  }, []);

  const searchPlacesByTerm = async (query: string) => {
    if (query.length === 0) {
      // clean state
      return [];
    }

    if (!state.userLocation) {
      throw new Error("User location is not set");
    }

    const response = await searchApi.get(`/${query}.json`, {
      params: {
        proximity: state.userLocation.join(","),
      },
    });

    console.log(response.data);
    return response.data;
  };

  return (
    <PlacesContext.Provider value={{ ...state, searchPlacesByTerm }}>
      {children}
    </PlacesContext.Provider>
  );
}
