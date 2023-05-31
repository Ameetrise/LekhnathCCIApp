import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  FeedsRoot: undefined;
  MembersRoot: undefined;
  ExploreRoot: undefined;

  Feeds: undefined;
  FeedDetails: undefined;
  Members: undefined;
  MembersPage: undefined;
  Explore: undefined;
  Login: undefined;
  Profile: undefined;
};

type FeedsRootScreenRouteProp = RouteProp<RootStackParamList, 'FeedsRoot'>;
type FeedsRootScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'FeedsRoot'
>;
export type FeedsRootScreenProp = {
  route: FeedsRootScreenRouteProp;
  navigation: FeedsRootScreenNavigationProp;
};

type FeedsScreenRouteProp = RouteProp<RootStackParamList, 'Feeds'>;
type FeedsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Feeds'
>;
export type FeedsScreenProp = {
  route: FeedsScreenRouteProp;
  navigation: FeedsScreenNavigationProp;
};

type FeedDetailsScreenRouteProp = RouteProp<RootStackParamList, 'FeedDetails'>;
type FeedDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'FeedDetails'
>;
export type FeedDetailsScreenProp = {
  route: FeedDetailsScreenRouteProp;
  navigation: FeedDetailsScreenNavigationProp;
};

type MembersRootScreenRouteProp = RouteProp<RootStackParamList, 'MembersRoot'>;
type MembersRootScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MembersRoot'
>;
export type MembersRootScreenProp = {
  route: MembersRootScreenRouteProp;
  navigation: MembersRootScreenNavigationProp;
};

type MembersScreenRouteProp = RouteProp<RootStackParamList, 'Members'>;
type MembersScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Members'
>;
export type MembersScreenProp = {
  route: MembersScreenRouteProp;
  navigation: MembersScreenNavigationProp;
};

type MembersPageScreenRouteProp = RouteProp<RootStackParamList, 'MembersPage'>;
type MembersPageScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MembersPage'
>;
export type MembersPageScreenProp = {
  route: MembersPageScreenRouteProp;
  navigation: MembersPageScreenNavigationProp;
};

type ExploreScreenRouteProp = RouteProp<RootStackParamList, 'Explore'>;
type ExploreScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Explore'
>;
export type ExploreScreenProp = {
  route: ExploreScreenRouteProp;
  navigation: ExploreScreenNavigationProp;
};

type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;
type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;
export type LoginScreenProp = {
  route: LoginScreenRouteProp;
  navigation: LoginScreenNavigationProp;
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;
type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Profile'
>;
export type ProfileScreenProp = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};
