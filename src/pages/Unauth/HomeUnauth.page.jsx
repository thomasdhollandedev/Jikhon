import React from 'react'
import CustomInput from '../../components/global/Inputs/CustomInput.component'
import CustomButton from '../../components/global/Buttons/CustomButton.component'
import { ImageBackground, View } from 'react-native'
import TopSectionUnauth from '../../components/unauth/TopSectionUnauth.component'
import MiddleSectionUnauth from '../../components/unauth/MiddleSectionUnauth.component'
import BottomSectionUnauth from '../../components/unauth/BottomSectionUnauth.component'

const HomeUnauth = () => {
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
        <BottomSectionUnauth />
      </ImageBackground>
    </View>
  )
}

export default HomeUnauth