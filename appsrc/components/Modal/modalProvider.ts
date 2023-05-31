import {NetInfoState, NetInfoStateType} from '@react-native-community/netinfo';
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

type ShowMenuContextProps = {
  shouldShowMenu: boolean;
  setShouldShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};
const ShowMenuContext = createContext<ShowMenuContextProps>({
  shouldShowMenu: false,
  setShouldShowMenu: function (): void {
    throw new Error('Function not implemented.');
  },
});

type NetInfoContextProps = {
  netInfo: boolean;
  setNetInfo: React.Dispatch<React.SetStateAction<NetInfoState>>;
};
const NetInfoContext = createContext<NetInfoContextProps>({
  netInfo: true,
  setNetInfo: function (): void {
    throw new Error('Function not implemented.');
  },
});

export {AlertContext, ShowMenuContext, NetInfoContext};
