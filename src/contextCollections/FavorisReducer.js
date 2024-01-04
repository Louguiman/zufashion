import Toast from "react-native-toast-message";

export const initialState = {
  favorisListerCollections: [],
};

const FavorisReducerContext = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_FAVORIS":
      console.log("ADD_TO_FAVORIS", payload);
      console.log("state", state);
      Toast.show({
        type: "success",
        text1: "cet collection a ete ajouter a votre favoris",
      });
      return {
        ...state,
        favorisListerCollections: [...state.favorisListerCollections, payload],
      };

      break;
    case "REMOVE_FROM_FAVORIS":
      console.log("ADD_TO_FAVORIS", payload);
      console.log("state", state);
      Toast.show({
        type: "error",
        text1: "cet collection a ete suprimer a votre favoris",
      });
      return {
        ...state,
        favorisListerCollections: state.favorisListerCollections.filter(
          (collection) => collection != payload
        ),
      };
    default:
      throw new Error(`No case for type ${type} found in FavoisReducer.`);
      break;
  }
};

export default FavorisReducerContext;
