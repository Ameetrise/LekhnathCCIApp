import {useCallback, useReducer} from 'react';

const formReducer = (
  state: {inputs: any},
  action: {type: any; inputId: any; value: any; inputs: any},
) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: action.value,
        },
      };
    default:
      return state;
  }
};

const useForm = (initialInputs: any) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
  });

  const inputHandler = useCallback((id: string, value: string) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value: value,
      inputId: id,
      inputs: undefined,
    });
  }, []);

  return [formState, inputHandler] as const;
};

export default useForm;
