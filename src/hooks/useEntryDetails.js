import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addEntryRedux, updateEntryRedux } from "../actions/entries.actions";
import { closeEditModal } from "../actions/modas.actions";

const useEntryDetails = (desc = "", val = "", isExp = true) => {
  const [description, setDescription] = useState(desc);
  const [value, setValue] = useState(val);
  const [isExpense, setIsExpense] = useState(isExp);
  const dispatch = useDispatch();

  useEffect(() => {
    setDescription(desc);
    setValue(val);
    setIsExpense(isExp);
  }, [desc, val, isExp]
  );

  const updateEntry = (id) => {
    dispatch(
      updateEntryRedux(
        id,
        {
          id,
          description,
          value,
          isExpense,
        }
      )
    );
    dispatch(closeEditModal());
    resetData();
  }

  const addEntry = () => {
    dispatch(addEntryRedux({
      id: v4(),
      description,
      value,
      isExpense,
    }))
    resetData();
  };

  const resetData = () => {
    setDescription("");
    setValue("");
    setIsExpense(true);
  }

  return {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry,
    updateEntry,
  }

}

export default useEntryDetails;
