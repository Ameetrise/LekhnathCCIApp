import React, {FunctionComponent} from 'react';
import {Text, TextStyle} from 'react-native';
import {useSelector} from 'react-redux';
import {AppState} from '../../redux/store';
import CustomColors from '../../config/CustomColors';

type CustomTextProps = {
  style?: TextStyle | TextStyle[];
  font?: string;
  children?: string;
  color?: string;
};
const CustomText: FunctionComponent<CustomTextProps> = ({
  children,
  font = 'Montserrat-Regular',
  style,
  color,
}: CustomTextProps) => {
  const theme = useSelector(
    (state: AppState) => state.appStateReducer.isDarkMode,
  );

  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;
  return (
    <Text
      style={[
        {
          ...passedStyles,
          fontFamily: font,
          color: color || CustomColors(theme).black,
        },
      ]}>
      {children}
    </Text>
  );
};
export default CustomText;
