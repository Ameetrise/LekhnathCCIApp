/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
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
import {useSelector} from 'react-redux';
import {AppState} from '../../redux/store';
import {CompanyItem, CompanyList} from '../../dataTypes/CompanyList.interface';
import VectorIcon from '../../components/VectorIcons';
import {s} from '../../config/Dimens';
import commonStyles from '../../components/commonStyles/CommonStyles';
import CustomButton from '../../components/views/CustomButton';

const {height, width} = Dimensions.get('screen');
export default function Profile() {
  const theme = useSelector(
    (state: AppState) => state.appStateReducer.isDarkMode,
  );
  const userMain = useSelector((state: AppState) => state.userReducer);
  const user = userMain?.user?.user;
  const currentCompany = userMain.currentCompanyIndex;
  const [currentCompanyIndex, setCurrentCompanyIndex] = useState(0);
  const [activeCompany, setActiveCompany] = useState<CompanyItem>();

  useEffect(() => {
    getUserCompany();
  }, []);

  const getUserCompany = (): void => {
    fetch(`http://localhost:3000/api/company/getcompanybyuid/${user.id}`, {
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
            break;
          }
        }
        console.log('setting');
        setActiveCompany(res.data.companies[currentCompanyIndex]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const removeGalleryImage = (imageName: string): void => {
    fetch('http://localhost:3000/api/company/removeGalleryImage', {
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

  return (
    <Container scrollable headerTitle="Profile" narrowMode>
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
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: width / 8 + s(12),
              top: s(12),
              zIndex: 3,
            }}>
            <VectorIcon
              iconFamily={'AntDesign'}
              iconName={'closecircle'}
              iconSize={s(24)}
              iconColor={CustomColors(theme).primaryColorDark}
            />
          </TouchableOpacity>
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
              uri: `http://localhost:3000/${activeCompany?.cLogo}`,
            }}
          />
        </View>
        <CustomText color={CustomColors(theme).primaryColorDark}>
          {activeCompany && activeCompany?.imageGallery.length > 0
            ? 'Long press on any image to remove'
            : 'Press the plus icon to add image.'}
        </CustomText>
        <ScrollView
          style={{paddingVertical: '4%'}}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {activeCompany?.imageGallery.map(img => {
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
                    uri: `http://localhost:3000/${img}`,
                  }}
                />
              </TouchableOpacity>
            );
          })}
          {activeCompany?.imageGallery &&
            activeCompany.imageGallery.length < 3 && (
              <TouchableOpacity
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
          value={activeCompany?.facebook}
          placeholder="Facebook link"
          onChangeText={text => {}}
        />
        <CustomInputText
          title="Website:"
          value={activeCompany?.website}
          placeholder="Website"
          onChangeText={text => {}}
        />
        <CustomInputText
          title="Opening Time:"
          value={activeCompany?.time}
          placeholder="Opening time"
          onChangeText={text => {}}
        />
        <CustomInputText
          title="E-mail:"
          value={activeCompany?.email}
          placeholder="E-mail"
          onChangeText={text => {}}
        />
        <CustomInputText
          title="address"
          value={activeCompany?.address}
          placeholder="address"
          onChangeText={text => {}}
        />
        <CustomInputText
          title="About"
          value={activeCompany?.description}
          multiline
          style={{textAlignVertical: 'top'}}
          placeholder="Desscription"
          onChangeText={text => {}}
        />
        <CustomButton
          style={[
            commonStyles.shadow,
            commonStyles.allCenter,
            {paddingVertical: s(8)},
          ]}
          title={'Update'}
          backgroundColor={CustomColors(theme).primaryColor}
          onPress={() => {}}
        />
      </View>
    </Container>
  );
}
