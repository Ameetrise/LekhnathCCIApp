export default function CustomColors(isDarkMode: boolean) {
  if (isDarkMode) {
    return Dark;
  }
  return Light;
}

const Light: ColorsType = {
  allWhite: '#fff',
  allBlack: '#000',
  backgroundColor: '#f5f5f5',
  primaryColor: '#3344ff',
  primaryColorDark: '#6600a6',
  primaryColorLight1: '#bd57ff',
  primaryColorLight2: '#d9a1ff',
  secondaryColor: '#ff21bc',
  accentColor: '#FFA500',
  accentColorLight: '#fff3de',
  accentColorDark: '#301f00',
  white: '#fff',
  black: '#000',
  offWhite: '#f7f7f7',
  whiteShade1: '#ededed',
  whiteShade2: '#e3e3e3',
  whiteShade3: '#cccccc',
  transparent: '#FFFFFF',
  darkAccent: '#1f1400',
  lightBlack: '#4d4d4d',
  warningColor: '#D65352',
  green: '#00a146',
  facebookColor: '#3b5998',
  red: 'red',
  purple: '#A020F0',
};
const Dark: ColorsType = {
  allWhite: '#fff',
  allBlack: '#000',
  backgroundColor: '#383838',
  primaryColor: '#949dff',
  primaryColorDark: '#6600a6',
  primaryColorLight2: '#bd57ff',
  primaryColorLight1: '#d9a1ff',
  secondaryColor: '#ff21bc',
  accentColor: '#FFA500',
  accentColorDark: '#fff3de',
  accentColorLight: '#c27e00',
  white: 'black',
  black: 'white',
  offWhite: '#171717',
  whiteShade3: '#ededed',
  whiteShade2: '#5e5e5e',
  whiteShade1: '#4a4a4a',
  transparent: '#FFFFFF',
  darkAccent: '#ffe7ba',
  lightBlack: '#d4d4d4',
  warningColor: '#D65352',
  green: '#00a146',
  facebookColor: '#ccdfff',
  red: 'red',
  purple: '#A020F0',
};

export type ColorsType = {
  allWhite: string;
  allBlack: string;
  backgroundColor: string;
  primaryColor: string;
  primaryColorDark: string;
  primaryColorLight2: string;
  primaryColorLight1: string;
  secondaryColor: string;
  accentColor: string;
  accentColorDark: string;
  accentColorLight: string;
  white: string;
  black: string;
  offWhite: string;
  whiteShade3: string;
  whiteShade2: string;
  whiteShade1: string;
  transparent: string;
  darkAccent: string;
  lightBlack: string;
  warningColor: string;
  facebookColor: string;
  red: string;
  green: string;
  purple: string;
};
