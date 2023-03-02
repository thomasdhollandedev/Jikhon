import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import darkStyle from '../../assets/styles/darkStyle';
import global from '../../assets/styles/global';

const MiddleSectionUnauth = () => {
  const [slideAnimation] = useState(new Animated.Value(0));
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    {
      icon: 'checkmark-circle-outline',
      text: 'Suivez vos mangas',
    },
    {
      icon: 'notifications-outline',
      text: 'Ne ratez plus aucune sortie',
    },
    {
      icon: 'calendar-outline',
      text: 'Gardez le fil de votre lecture',
    },
  ];

  useEffect(() => {
    const slideTimer = setInterval(() => {
      // Calculer le nouvel index de la slide
      const newSlideIndex = (slideIndex + 1) % slides.length;
      // Mettre à jour l'index de la slide et démarrer l'animation
      setSlideIndex(newSlideIndex);
      Animated.timing(slideAnimation, {
        toValue: -newSlideIndex * (Dimensions.get('window').width),
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        // Si on vient de passer à la dernière slide, on revient à la première sans transition
        if (newSlideIndex === 0) {
          slideAnimation.setValue(0);
        }
      });
    }, 3000);

    return () => clearInterval(slideTimer);
  }, [slideAnimation, slideIndex, slides.length]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.slideContainer,
          {
            transform: [{ translateX: slideAnimation }],
          },
        ]}
      >
        {slides.map((slide, index) => (
          <View key={index} style={styles.slide}>
            <Ionicons
              name={slide.icon}
              style={[darkStyle.primaryText__COLOR, styles.icon]}
            />
            <Text
              style={[
                global.subtitle2,
                darkStyle.primaryText__COLOR,
                styles.text,
              ]}
            >
              {slide.text}
            </Text>
          </View>
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'hidden',
  },
  slideContainer: {
    width: '300%',
    display: 'flex',
    flexDirection: 'row',
  },
  slide: {
    width: '33.33%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  icon: {
    fontSize: 40,
  },
  text: {
    textAlign: 'center',
  },
});

export default MiddleSectionUnauth;
