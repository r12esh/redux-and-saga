import entryTypes from "../actions/entries.actions";

const entriesReducer = (state = initialEntry, action) => {
  let newState;
  switch (action.type) {
    case entryTypes.POPULATE_ENTRIES:
      return action.payload

    case entryTypes.ADD_ENTRY:
      newState = state.concat({ ...action.payload })
      return newState;

    case entryTypes.REMOVE_ENTRY_RESULT:
      newState = state.filter(entry => entry.id !== action.payload)
      return newState;

    case entryTypes.POPULATE_ENTRY_DETAILS:
    case entryTypes.UPDATE_ENTRY:
      newState = [...state];
      const index = state.findIndex(entry => entry.id === action.payload.id);
      newState[index] = { ...newState[index], ...action.payload.entry };
      return newState;

    default:
      return state;

  }
}
export default entriesReducer;

var initialEntry = [];