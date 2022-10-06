import { ChangeEvent, useContext, useRef } from "react";
import { PlacesContext } from "../context";

export function SearchBar() {
  const { searchPlacesByTerm } = useContext(PlacesContext);
  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      searchPlacesByTerm(event.target.value);
    }, 500);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="form-control"
        placeholder="Search for a place"
        onChange={onQueryChange}
      />
    </div>
  );
}
