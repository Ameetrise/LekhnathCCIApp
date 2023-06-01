import React from 'react';
import {View, ViewProps} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

type IconFamily =
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'Fontisto'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialCommunityIcons'
  | 'MaterialIcons'
  | 'Octicons'
  | 'SimpleLineIcons'
  | 'Zocial';

const VectorIcon = ({
  iconFamily,
  iconName,
  iconSize,
  iconColor,
  style,
}: {
  iconFamily: IconFamily;
  iconName: string;
  iconSize: number;
  iconColor: string;
  style?: ViewProps['style'];
}) => {
  return (
    <View style={style}>
      {iconFamily === 'AntDesign' && (
        <AntDesign name={iconName} color={iconColor} size={iconSize} />
      )}

      {iconFamily === 'Entypo' && (
        <Entypo name={iconName} color={iconColor} size={iconSize} />
      )}
      {iconFamily === 'EvilIcons' && (
        <EvilIcons name={iconName} color={iconColor} size={iconSize} />
      )}
      {iconFamily === 'Feather' && (
        <Feather name={iconName} color={iconColor} size={iconSize} />
      )}
      {iconFamily === 'FontAwesome' && (
        <FontAwesome name={iconName} color={iconColor} size={iconSize} />
      )}
      {iconFamily === 'FontAwesome5' && (
        <FontAwesome5 name={iconName} color={iconColor} size={iconSize} />
      )}
      {iconFamily === 'Fontisto' && (
        <Fontisto name={iconName} color={iconColor} size={iconSize} />
      )}
      {iconFamily === 'FontAwesome5' && (
        <FontAwesome5 name={iconName} color={iconColor} size={iconSize} />
      )}
      {iconFamily === 'Foundation' && (
        <Foundation name={iconName} color={iconColor} size={iconSize} />
      )}
      {iconFamily === 'Ionicons' && (
        <Ionicons name={iconName} color={iconColor} size={iconSize} />
      )}
      {iconFamily === 'MaterialCommunityIcons' && (
        <MaterialCommunityIcons
          name={iconName}
          color={iconColor}
          size={iconSize}
        />
      )}
      {iconFamily === 'MaterialIcons' && (
        <MaterialIcons name={iconName} color={iconColor} size={iconSize} />
      )}
      {iconFamily === 'Octicons' && (
        <Octicons name={iconName} color={iconColor} size={iconSize} />
      )}
      {iconFamily === 'SimpleLineIcons' && (
        <SimpleLineIcons name={iconName} color={iconColor} size={iconSize} />
      )}
      {iconFamily === 'Zocial' && (
        <Zocial name={iconName} color={iconColor} size={iconSize} />
      )}
    </View>
  );
};

export default VectorIcon;
