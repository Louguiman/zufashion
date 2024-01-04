import { createContext, useReducer, useContext } from "react";

import FavorisReducer, { initialState } from "./FavorisReducer";

const favorisContextCollections = createContext(initialState);

export const FavorisProviderCollections = ({ children }) => {
  const [state, dispatch] = useReducer(FavorisReducer, initialState);
  const addToFavoris = (collection) => {
    dispatch({
      type: "ADD_TO_FAVORIS",
      payload: collection,
    });
  };
  const removeFromFavoris = (collection) => {
    dispatch({
      type: "REMOVE_FROM_FAVORIS",
      payload: collection,
    });
  };
  const value = {
    favorisListerCollections: state.favorisListerCollections,
    addToFavoris,
    removeFromFavoris,
  };
  return (
    <favorisContextCollections.Provider value={value}>
      {children}
    </favorisContextCollections.Provider>
  );
};

const useFavorisCollections = () => {
  const context = useContext(favorisContextCollections);
  if (context === undefined) {
    throw new Error("useFavoris must be used within favorisContext");
  }
  return context;
};
export default useFavorisCollections;
