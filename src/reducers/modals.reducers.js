import modalTypes from "../actions/modas.actions";

const modalsReducer = (state = { isOpen: false, id: null }, action) => {
  switch (action.type) {
    case modalTypes.OPEN_EDIT_MODAL:
      return { ...state, isOpen: true, id: action.payload.id }
    case modalTypes.CLOSE_EDIT_MODAL:
      return { ...state, isOpen: false, id: null };
    default:
      return state;
  }
};
export default modalsReducer;
