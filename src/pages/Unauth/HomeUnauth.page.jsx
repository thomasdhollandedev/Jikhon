import React from 'react'
import CustomInput from '../../components/global/Inputs/CustomInput.component'
import CustomButton from '../../components/global/Buttons/CustomButton.component'
import { ImageBackground, View } from 'react-native'
import TopSectionUnauth from '../../components/Unauth/TopSectionUnauth.component'
import MiddleSectionUnauth from '../../components/Unauth/MiddleSectionUnauth.component'
import BottomSectionUnauth from '../../components/Unauth/BottomSectionUnauth.component'

const HomeUnauth = ({navigation}) => {
  return (
    <View>
      <ImageBackground
        source={require('./../../assets/images/home_unauth_bg.png')}
        resizeMode="cover"
        style={
          {
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center'
          }
        }
      >
        <TopSectionUnauth />
        <MiddleSectionUnauth />
        <BottomSectionUnauth navigation={navigation} />
      </ImageBackground>
    </View>
  )
}

export default HomeUnauth