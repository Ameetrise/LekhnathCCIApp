/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  Dimensions,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VectorIcon from '../components/VectorIcons';

const {width, height} = Dimensions.get('screen');
function HomeScreen() {
  let scaleAnimation = new Animated.Value(1);
  let slideRight = new Animated.Value(1);

  let interSlideRight = slideRight.interpolate({
    inputRange: [0, 1],
    extrapolateLeft: 'extend',
    outputRange: [1, 5],
  });
  let interSlideRight2 = slideRight.interpolate({
    inputRange: [0, 1],
    extrapolateLeft: 'extend',
    outputRange: [1, 5],
  });

  let interScale = scaleAnimation.interpolate({
    inputRange: [0, height],
    outputRange: [0.4, 2],
    extrapolateLeft: 'extend',
    extrapolateRight: 'clamp',
  });
  const startAnimation = (): void => {
    slideRight.addListener(val => {
      console.log(val);
    });

    Animated.sequence([
      Animated.parallel([
        Animated.timing(slideRight, {
          useNativeDriver: true,
          toValue: 40,
          duration: 500,
        }),
        Animated.timing(scaleAnimation, {
          useNativeDriver: true,
          toValue: 2,
          duration: 500,
        }),
      ]),
      Animated.timing(scaleAnimation, {
        useNativeDriver: true,
        toValue: 1,
        duration: 500,
      }),
      Animated.parallel([
        Animated.timing(slideRight, {
          useNativeDriver: true,
          toValue: 80,
          duration: 500,
        }),
      ]),
    ]).start();
  };
  return (
    <View
      style={{
        backgroundColor: 'pink',
        height: 64,
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        onPress={() => {
          startAnimation();
        }}>
        <Animated.View
          style={{
            transform: [{scale: scaleAnimation}, {translateX: slideRight}],
            height: 64,
            width: 64,
            borderRadius: 32,
            backgroundColor: 'brown',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Scale</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{height: 24, width: 24, backgroundColor: 'red'}} />
      <Text>Settings!</Text>
    </View>
  );
}
function About() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{height: 24, width: 24, backgroundColor: 'red'}} />
      <Text>Settings!</Text>
    </View>
  );
}

const imageScale = new Animated.Value(1);
const imageX = new Animated.Value(0);

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

function MyTabBar({
  state,
  descriptors,
  navigation,
}: {
  state: any;
  descriptors: any;
  navigation: any;
}) {
  React.useEffect(() => {
    Animated.timing(imageX, {
      useNativeDriver: true,
      toValue: 100,
      duration: 1000,
    }).start();
  }, []);

  return (
    <View style={{flexDirection: 'row', paddingBottom: 0}}>
      {state.routes.map(
        (route: {key: string | number; name: any}, index: any) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }

            // console.log('previous tab index: ', state.index);
            console.log('current', route.name);
            console.log('current', index);
            console.log('last', state.index);
            // Animated.timing(imageScale, {
            //   useNativeDriver: true,
            //   toValue: 2,
            //   duration: 1000,
            // }).start();
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          <Text>{JSON.stringify(state)}</Text>;

          return (
            <AnimatedTouchable
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                transform: [
                  {
                    scale: imageScale.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 1],
                    }),
                  },
                  {
                    translateY: Animated.divide(
                      imageX.interpolate({
                        inputRange: [0, 30],
                        outputRange: [30, 0],
                      }),
                      imageX.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 1.5],
                      }),
                    ),
                  },
                ],
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: isFocused ? 'orange' : 'white',
                paddingBottom: 28,
              }}>
              <Text style={{color: isFocused ? '#673ab7' : '#222'}}>
                {label}
              </Text>
              <VectorIcon
                iconFamily={'AntDesign'}
                iconName={'home'}
                iconSize={18}
                iconColor={isFocused ? 'blue' : 'green'}
              />
            </AnimatedTouchable>
          );
        },
      )}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen
          navigationKey="a"
          key={'1'}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          navigationKey="ss"
          key={'b'}
          name="Settings"
          component={SettingsScreen}
        />
        <Tab.Screen
          navigationKey="sss"
          key={'sb'}
          name="About"
          component={About}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
