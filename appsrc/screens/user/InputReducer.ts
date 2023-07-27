import {useCallback, useReducer} from 'react';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: action.value,
        },
      };

    case 'SET_DATA':
      return {
        inputs: action.inputs,
      };
    default:
      return state;
  }
};

const useForm = initialInputs => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
  });

  const inputHandler = useCallback((id: string, value: string) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value: value,
      inputId: id,
    });
  }, []);

  const setFormData = useCallback(inputData => {
    dispatch({
      type: 'SET_DATA',
      inputs: inputData,
    });
  }, []);

  return [formState, inputHandler, setFormData] as const;
};

export default useForm;
