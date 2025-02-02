import { View, Text, StyleSheet, Image, Dimensions, SafeAreaView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const { width, height } = Dimensions.get('window')

export default function Landing() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/images/dear.jpg')} 
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.bottomSheet}>
        <Text style={styles.title}>
          Explore Courses and Learn Something New!
        </Text>
        <Text style={styles.subtitle}>
          Enroll in courses and track your progress now
        </Text>
        <Link href="/(Login)/login" style={styles.button}>
          <Text style={styles.buttonText}>
            Login
          </Text>
        </Link>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  imageContainer: {
    height: height * 0.65,
    overflow: 'hidden',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#87CEEB' // Light blue background as fallback
  },
  image: {
    width: '100%',
    height: '100%'
  },
  bottomSheet: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 30,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 12,
    color: '#000000',
    letterSpacing: -0.5
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 24
  },
  button: {
    backgroundColor: '#D4A373',
    paddingHorizontal: 50,
    paddingVertical: 14,
    borderRadius: 25,
    marginTop: 10
  },
  buttonText: {
    color: '#000000',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center'
  }
})