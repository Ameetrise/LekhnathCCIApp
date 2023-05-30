import {createContext} from 'react';

type AlertContextProps = {
  alertMessage: string;
  setAlertMessage: React.Dispatch<React.SetStateAction<string>>;
  shouldShowAlert: boolean;
  setShouldShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
};
const AlertContext = createContext<AlertContextProps>({
  alertMessage: '',
  setAlertMessage: function (): void {
    throw new Error('Function not implemented.');
  },
  shouldShowAlert: false,
  setShouldShowAlert: function (): void {
    throw new Error('Function not implemented.');
  },
});

export {AlertContext};
