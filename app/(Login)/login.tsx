import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, SafeAreaView } from 'react-native'
import React, { useState, useCallback } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { Link } from 'expo-router'

const { width, height } = Dimensions.get('window')

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync()

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [fontsLoaded] = useFonts({
    'BebasNeue-Regular': require('../../assets/fonts/BebasNeue-Regular.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.content}>
        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/applogo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.logoText}>MERITORIUM</Text>
          <Text style={styles.subText}>KNOWLEDGE ACADEMY</Text>
        </View>

        {/* Login Section */}
        <Text style={styles.title}>LOGIN</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your email .."
          placeholderTextColor="#000000"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Enter your password .."
          placeholderTextColor="#000000"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Link 
           href="/(Home)/Course"
           style={styles.button}>
           <Text style={styles.buttonText}>Login</Text>
         </Link>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#563B26',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: width * 0.08,
    paddingVertical: height * 0.05,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: height * 0.06,
  },
  logo: {
    width: width * 0.25,
    height: width * 0.25,
    marginBottom: 10,
  },
  logoText: {
    fontSize: width * 0.06,
    color: '#0000FF',
    textAlign: 'center',
    fontFamily: 'BebasNeue-Regular',
  },
  subText: {
    fontSize: width * 0.035,
    color: '#0000FF',
    textAlign: 'center',
    fontFamily: 'BebasNeue-Regular',
  },
  title: {
    fontSize: width * 0.12,
    color: '#FFA500',
    marginBottom: height * 0.04,
    fontFamily: 'BebasNeue-Regular',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#E5C697',
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.018,
    borderRadius: 25,
    marginBottom: height * 0.02,
    fontSize: width * 0.045,
    color: '#000000',
    fontFamily: 'BebasNeue-Regular',
  },
  button: {
    width: '100%',
    backgroundColor: '#E5A45B',
    paddingVertical: height * 0.018,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  buttonText: {
    color: '#000000',
    fontSize: width * 0.045,
    fontFamily: 'BebasNeue-Regular',
  },
})
