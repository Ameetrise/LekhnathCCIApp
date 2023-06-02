export default function CustomColors(isDarkMode: boolean) {
  if (isDarkMode) {
    return ColorList;
  }
  return ColorList2;
}

const ColorList = {
  allWhite: '#fff',
  allBlack: '#000',
  backgroundColor: '#f5f5f5',
  primaryColor: '#535dcf',
  primaryColorDark: '#d6e6ff',
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
};
const ColorList2 = {
  allWhite: '#fff',
  allBlack: '#000',
  backgroundColor: '#383838',
  primaryColor: '#00122e',
  primaryColorDark: '#d28cff',
  primaryColorLight2: '#bd57ff',
  primaryColorLight1: '#d9a1ff',
  secondaryColor: '#ff21bc',
  accentColor: '#FFA500',
  accentColorDark: '#fff3de',
  accentColorLight: '#c27e00',
  white: 'black',
  black: 'white',
  offWhite: '#545454',
  whiteShade3: '#ededed',
  whiteShade2: '#e3e3e3',
  whiteShade1: '#4a4a4a',
  transparent: '#FFFFFF',
  darkAccent: '#ffe7ba',
  lightBlack: '#d4d4d4',
  warningColor: '#D65352',
  green: '#00a146',
};
