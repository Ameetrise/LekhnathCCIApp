import React, {FunctionComponent} from 'react';
import {Text, TextStyle} from 'react-native';

type CustomTextProps = {
  style?: TextStyle | TextStyle[];
  font?: string;
  children: string;
};
const CustomText: FunctionComponent<CustomTextProps> = ({
  children,
  font = 'Montserrat-Regular',
  style,
}: CustomTextProps) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;
  return <Text style={[{...passedStyles, fontFamily: font}]}>{children}</Text>;
};
export default CustomText;
