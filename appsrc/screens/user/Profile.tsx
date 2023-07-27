/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useReducer, useState} from 'react';
import Container from '../container/Container';
import CustomText from '../../components/views/CustomText';
import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomInputText from '../../components/views/CustomInputText';
import CustomColors from '../../config/CustomColors';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../../redux/store';
import {CompanyItem, CompanyList} from '../../dataTypes/CompanyList.interface';
import VectorIcon from '../../components/VectorIcons';
import {s} from '../../config/Dimens';
import commonStyles from '../../components/commonStyles/CommonStyles';
import CustomButton from '../../components/views/CustomButton';
import {updateCompany} from '../../redux/actions/userAction';
import ImagePicker from 'react-native-image-crop-picker';
import {baseUrl} from '../../../env';
import appReducer from './InputReducer';
import useForm from './InputReducer';

const {height, width} = Dimensions.get('screen');
export default function Profile() {
  const dispatch = useDispatch();
  const theme = useSelector(
    (state: AppState) => state.appStateReducer.isDarkMode,
  );
  const userMain = useSelector((state: AppState) => state.userReducer);
  const user = userMain?.user?.user;
  const currentCompany = userMain.currentCompanyIndex;
  const [currentCompanyIndex, setCurrentCompanyIndex] = useState(
    userMain.currentCompanyIndex,
  );
  const [activeCompany, setActiveCompany] = useState<CompanyItem>();
  const [loading, setLoading] = useState(false);
  const [formState, inputHandler] = useForm({});

  useEffect(() => {
    getUserCompany();
  }, []);
  useEffect(() => {
    setActiveCompany(user.companyList[userMain.currentCompanyIndex]);
  }, [userMain.currentCompanyIndex]);

  const getUserCompany = (): void => {
    fetch(`${baseUrl}api/company/getcompanybyuid/${user.id}`, {
      headers: {
        Authorization: `Bearer ${userMain.user.token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(val => {
        return val.json();
      })
      .then((res: CompanyList) => {
        for (let i = 0; i < res.data.companies.length; i++) {
          if (
            res.data.companies[i].id === user.companyList[currentCompany].id
          ) {
            setCurrentCompanyIndex(i);
            dispatch(updateCompany(res.data.companies));
            break;
          }
        }
        setActiveCompany(res.data.companies[currentCompanyIndex]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const removeProfileLogo = (cId?: string) => {
    fetch(`${baseUrl}api/company/removecLogo`, {
      method: 'POST',
      body: JSON.stringify({
        cId: cId,
      }),
      headers: {
        Authorization: `Bearer ${userMain.user.token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(jres => jres.json())
      .then(res => {
        Alert.alert('Success', 'Image removed successfully', res);
        getUserCompany();
      })
      .catch(err => {
        console.log(err);
      });
  };

  const addProfileImage = (): void => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      multiple: false,
      width: 300,
      height: 400,
    })
      .then(async image => {
        const data = new FormData();
        data.append('cId', user.companyList[userMain.currentCompanyIndex].id);
        data.append('cLogo', {
          uri: image.path,
          type: 'image/jpeg',
          name: 'photo.jpg',
        });
        console.log(image);
        let res = await fetch(`${baseUrl}api/company/uploadcLogo`, {
          method: 'Post',
          body: data,
          headers: {
            Authorization: `Bearer ${userMain.user.token}`,
            'Content-Type': 'multipart/form-data; ',
          },
        });
        await res.json().then(response => {
          getUserCompany();
        });
      })
      .catch(e => {
        console.log('picker error: ', e);
      });
  };

  const removeGalleryImage = (imageName: string): void => {
    fetch(`${baseUrl}api/company/removeGalleryImage`, {
      method: 'POST',
      body: JSON.stringify({
        cId: activeCompany?.id,
        imageName: imageName,
      }),
      headers: {
        Authorization: `Bearer ${userMain.user.token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(jres => jres.json())
      .then(res => {
        Alert.alert('Success', 'Image removed successfully');
        getUserCompany();
      })
      .catch(err => {
        console.log(err);
      });
  };

  const addGalleryImage = () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      multiple: false,
      width: 300,
      height: 400,
    })
      .then(async image => {
        const data = new FormData();
        data.append('cId', user.companyList[userMain.currentCompanyIndex].id);
        data.append('imageGallery', {
          uri: image.path,
          type: 'image/jpeg',
          name: 'photo.jpg',
        });
        console.log(image);
        let res = await fetch(`${baseUrl}api/company/uploadcgallery`, {
          method: 'Post',
          body: data,
          headers: {
            Authorization: `Bearer ${userMain.user.token}`,
            'Content-Type': 'multipart/form-data; ',
          },
        });
        await res.json().then(response => {
          getUserCompany();
        });
      })
      .catch(e => {
        console.log('picker error: ', e);
      });
  };

  const updateCompanyDetail = (): void => {
    setLoading(true);
    fetch(`${baseUrl}api/company/${activeCompany?.id}`, {
      method: 'PATCH',
      body: JSON.stringify(formState.inputs),
      headers: {
        Authorization: `Bearer ${userMain.user.token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(json => {
        setLoading(false);
        getUserCompany();
        console.log('succes', json);
      })
      .catch(e => {
        setLoading(false);
        console.log(e);
      });
  };

  return (
    <Container scrollable headerTitle="Profile" narrowMode>
      <>
        {userMain?.user.user && (
          <View style={{paddingBottom: s(24)}}>
            <View
              style={[
                {
                  width: '100%',
                  paddingVertical: s(8),
                  justifyContent: 'center',
                  alignItems: 'center',
                },
                commonStyles.shadow,
              ]}>
              <CustomText
                style={{fontSize: 18, paddingVertical: 8}}
                color={CustomColors(theme).darkAccent}
                font="Montserrat-SemiBold">
                {activeCompany?.cName}
              </CustomText>
              <TouchableOpacity
                onLongPress={() => {
                  {
                    activeCompany?.cLogo
                      ? Alert.alert(
                          'Warning',
                          'Are you sure you want to delete this photo?',
                          [
                            {
                              text: 'Cancel',
                              onPress: () => console.log('Cancel Pressed!'),
                            },
                            {
                              text: 'Yes',
                              onPress: () => {
                                removeProfileLogo(
                                  userMain.companyList[
                                    userMain.currentCompanyIndex
                                  ].id,
                                );
                              },
                            },
                          ],
                          {cancelable: true},
                        )
                      : addProfileImage();
                  }
                }}>
                <Image
                  resizeMode="contain"
                  style={{
                    padding: s(4),
                    height: width / 2,
                    width: width / 2,
                    borderRadius: width / 4,
                    backgroundColor: CustomColors(theme).white,
                  }}
                  source={{
                    uri: `${baseUrl}${activeCompany?.cLogo}`,
                  }}
                />
              </TouchableOpacity>
            </View>
            <CustomText color={CustomColors(theme).primaryColorDark}>
              {activeCompany?.imageGallery &&
              activeCompany?.imageGallery?.length > 0
                ? 'Long press on any image to remove'
                : 'Press the plus icon to add image.'}
            </CustomText>
            <ScrollView
              style={{paddingVertical: '4%'}}
              horizontal
              showsHorizontalScrollIndicator={false}>
              {activeCompany?.imageGallery?.map(img => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      Alert.alert(
                        'Confirmation',
                        'Are you sure you want to delete this image?',
                        [
                          {text: 'Yes', onPress: () => removeGalleryImage(img)},
                          {
                            text: 'Cancel',
                            onPress() {},
                          },
                        ],
                      );
                    }}
                    style={{}}
                    key={img}>
                    <Image
                      resizeMode="contain"
                      style={{
                        height: s(84),
                        width: s(84),
                        padding: '4%',
                        margin: 2,
                        borderTopLeftRadius: 4,
                        borderBottomRightRadius: 4,
                        borderTopRightRadius: 12,
                        borderBottomLeftRadius: 12,
                      }}
                      source={{
                        uri: `${baseUrl}${img}`,
                      }}
                    />
                  </TouchableOpacity>
                );
              })}
              {activeCompany?.imageGallery &&
                activeCompany.imageGallery.length < 3 && (
                  <TouchableOpacity
                    onPress={() => {
                      addGalleryImage();
                    }}
                    style={[commonStyles.allCenter, {width: s(84)}]}>
                    <VectorIcon
                      style={{backgroundColor: CustomColors(theme).white}}
                      iconFamily={'AntDesign'}
                      iconName={'pluscircle'}
                      iconSize={s(56)}
                      iconColor={CustomColors(theme).primaryColor}
                    />
                  </TouchableOpacity>
                )}
            </ScrollView>

            <CustomText
              style={{paddingBottom: '2%'}}
              color={CustomColors(true).primaryColorDark}
              font="Montserrat-SemiBold">
              Edit the properties below:
            </CustomText>
            <CustomInputText
              title="Facebook:"
              value={formState?.inputs?.facebook || activeCompany?.facebook}
              placeholder="Facebook link"
              onChangeText={text => {
                inputHandler('facebook', text);
              }}
            />
            <CustomInputText
              title="Website:"
              value={formState?.inputs?.website || activeCompany?.website}
              placeholder="Website"
              onChangeText={text => {
                inputHandler('website', text);
              }}
            />
            <CustomInputText
              title="Opening Time:"
              value={formState?.inputs?.time || activeCompany?.time}
              placeholder="Opening time"
              onChangeText={text => {
                inputHandler('time', text);
              }}
            />
            <CustomInputText
              title="E-mail:"
              value={formState?.inputs?.email || activeCompany?.email}
              placeholder="E-mail"
              onChangeText={text => {
                inputHandler('email', text);
              }}
            />
            <CustomInputText
              title="address"
              value={formState?.inputs?.address || activeCompany?.address}
              placeholder="address"
              onChangeText={text => {
                inputHandler('address', text);
              }}
            />
            <CustomInputText
              title="About"
              value={
                formState?.inputs?.description || activeCompany?.description
              }
              multiline
              style={{textAlignVertical: 'top'}}
              placeholder="Desscription"
              onChangeText={text => {
                inputHandler('description', text);
              }}
            />
            <CustomButton
              loading={loading}
              disabled={JSON.stringify(formState.inputs) === '{}'}
              style={[
                commonStyles.shadow,
                commonStyles.allCenter,
                {paddingVertical: s(8)},
              ]}
              title={'Update'}
              backgroundColor={
                JSON.stringify(formState.inputs) !== '{}'
                  ? CustomColors(theme).primaryColor
                  : CustomColors(theme).whiteShade3
              }
              onPress={() => {
                updateCompanyDetail();
              }}
            />
          </View>
        )}
        {!userMain?.user.user && (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <CustomText>This section is for logged in users only.</CustomText>
          </View>
        )}
      </>
    </Container>
  );
}
