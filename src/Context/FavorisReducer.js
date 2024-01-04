import Toast from "react-native-toast-message";

export const initialState = {
  favorisLister: [],
};

const FavorisReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_FAVORIS":
      console.log("ADD_TO_FAVORIS", payload);
      console.log("state", state);
      Toast.show({
        type: "success",
        text1: "cet poste a ete ajouter a votre favoris",
      });
      return {
        ...state,
        favorisLister: [...state.favorisLister, payload],
      };

      break;
    case "REMOVE_FROM_FAVORIS":
      console.log("ADD_TO_FAVORIS", payload);
      console.log("state", state);
      Toast.show({
        type: "error",
        text1: "cet poste a ete suprimer a votre favoris",
      });
      return {
        ...state,
        favorisLister: state.favorisLister.filter((poste) => poste != payload),
      };
    default:
      throw new Error(`No case for type ${type} found in FavoisReducer.`);
      break;
  }
};

export default FavorisReducer;
