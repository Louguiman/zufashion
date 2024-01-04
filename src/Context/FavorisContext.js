import { createContext, useReducer, useContext } from "react";

import FavorisReducer, { initialState } from "./FavorisReducer";

const favorisContext = createContext(initialState);

export const FavorisProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FavorisReducer, initialState);
  const addToFavoris = (poste) => {
    dispatch({
      type: "ADD_TO_FAVORIS",
      payload: poste,
    });
  };
  const removeFromFavoris = (poste) => {
    dispatch({
      type: "REMOVE_FROM_FAVORIS",
      payload: poste,
    });
  };
  const value = {
    favorisLister: state.favorisLister,
    addToFavoris,
    removeFromFavoris,
  };
  return (
    <favorisContext.Provider value={value}>{children}</favorisContext.Provider>
  );
};

const useFavoris = () => {
  const context = useContext(favorisContext);
  if (context === undefined) {
    throw new Error("useFavoris must be used within favorisContext");
  }
  return context;
};
export default useFavoris;
