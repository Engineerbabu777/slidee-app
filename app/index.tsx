import { ActivityIndicator, Dimensions, StatusBar, StyleSheet, View } from 'react-native'
import { useFonts } from '@expo-google-fonts/inter'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { useRouter } from 'expo-router'

export default function Main () {
  const router = useRouter() 
  let [fontsLoaded] = useFonts({
    NotoBlack: require('@/assets/fonts/Noto/NotoSans_Condensed-Black.ttf'),
    NotoBold: require('@/assets/fonts/Noto/NotoSans_Condensed-Bold.ttf'),
    NotoRegular: require('@/assets/fonts/Noto/NotoSans_Condensed-Regular.ttf'),
    NotoMedium: require('@/assets/fonts/Noto/NotoSans_Condensed-Medium.ttf'),
    NotoLight: require('@/assets/fonts/Noto/NotoSans_Condensed-Light.ttf')
  })

  useEffect(() => {
    async function prepare () {
      await SplashScreen.preventAutoHideAsync() 
    }
    prepare()
  }, [])

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync() // Hide the splash screen once fonts are loaded
      router.push('/(auth)/create-profile') // Redirect to the onboarding page
    }
  }, [fontsLoaded]) 

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color='#0D69C0' />
      </View>
    )
  }

  return (
    <>
      <StatusBar barStyle='dark-content' />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white' 
  }
})
