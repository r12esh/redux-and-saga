const modalTypes = {
  OPEN_EDIT_MODAL:"OPEN_EDIT_MODAL",
  CLOSE_EDIT_MODAL:"CLOSE_EDIT_MODAL"
}

export const openEditModal = (id) => {
  return { type: modalTypes.OPEN_EDIT_MODAL, payload: { id } }
}

export const closeEditModal = () => {
  return { type: modalTypes.CLOSE_EDIT_MODAL }
}

export default modalTypes;