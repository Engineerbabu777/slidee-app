import { useEffect, useReducer, useState } from 'react'
import {
  Image,
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
  Alert,
  StatusBar
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import Entypo from '@expo/vector-icons/Entypo'
import { Picker } from '@react-native-picker/picker'
import * as Location from 'expo-location'
import { useRouter } from 'expo-router'

export default function Index () {
  const [image, setImage] = useState(null)
  const [selectedLanguage, setSelectedLanguage] = useState()
  const [location, setLocation] = useState(null)
  const router = useRouter()

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

    console.log(result)

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  async function getCurrentLocation () {
    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied')
      return
    }
    console.log({ status })

    const { coords } = await Location.getCurrentPositionAsync()

    if (coords) {
      const { latitude, longitude } = coords

      //provide lat and long to get the the actual address
      let responce = await Location.reverseGeocodeAsync({
        latitude,
        longitude
      })

      setLocation(responce[0]?.city || responce?.subregion[0] || null)
    }
  }

  useEffect(() => {
    getCurrentLocation()
  }, [])

  return (
    <>
      <StatusBar animated barStyle={'dark-content'} />
      <ScrollView>
        {/* TOP! */}
        <View style={{ marginTop: 30 }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'NotoBold',
              fontSize: 18
            }}
          >
            Create new profile
          </Text>
        </View>

        {/* Select Profile image! */}
        <Pressable onPress={pickImage}>
          {/* IF IMAGE IS NOT PRESENT! */}
          {!image && (
            <View
              style={{
                height: 200,
                width: 200,
                alignSelf: 'center',
                marginTop: 30,
                backgroundColor: '#D1E9F6',
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Entypo name='camera' size={72} color='white' />
            </View>
          )}
          {/* IF IMAGE IS PRESENT! */}
          {image && (
            <View
              style={{
                height: 200,
                width: 200,
                alignSelf: 'center',
                marginTop: 30,
                borderRadius: 100,
                overflow: 'hidden'
              }}
            >
              <Image
                source={{ uri: image }}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </View>
          )}
        </Pressable>

        {/* Inputs! */}
        <View style={{ margin: 20, marginTop: 30, gap: 20 }}>
          {/* DISPLAY NAME! */}
          <View style={{}}>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                width: '99%'
              }}
            >
              <Text style={{ color: '#9AA6B2', fontFamily: 'NotoLight' }}>
                Display Name*
              </Text>
              <Text style={{ color: '#9AA6B2', fontFamily: 'NotoLight' }}>
                0 of 48
              </Text>
            </View>
            <TextInput
              placeholder='How your name appears on profile'
              style={{
                backgroundColor: '#FAFAFAFF',
                borderRadius: 10,
                padding: 15,
                borderColor: '#BCCCDC',
                borderWidth: 1
              }}
              numberOfLines={1}
              placeholderTextColor={'#BCCCDC'}
            />
          </View>

          {/* BIO! */}
          <View style={{}}>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                width: '99%'
              }}
            >
              <Text style={{ color: '#9AA6B2', fontFamily: 'NotoLight' }}>
                Bio on profile*
              </Text>
              <Text style={{ color: '#9AA6B2', fontFamily: 'NotoLight' }}>
                0 of 80
              </Text>
            </View>
            <TextInput
              placeholder='How your name appears on profile'
              style={{
                backgroundColor: '#FAFAFAFF',
                borderRadius: 10,
                padding: 15,
                borderColor: '#BCCCDC',
                borderWidth: 1
              }}
              numberOfLines={1}
              placeholderTextColor={'#BCCCDC'}
            />
          </View>

          {/* Interest! */}
          <View style={{}}>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                width: '99%'
              }}
            >
              <Text style={{ color: '#9AA6B2', fontFamily: 'NotoLight' }}>
                Select your Interest*
              </Text>
            </View>

            <View
              style={{
                borderColor: '#BCCCDC',
                borderWidth: 1,
                borderRadius: 10,
                overflow: 'hidden'
              }}
            >
              <Picker
                style={{
                  backgroundColor: '#FAFAFAFF',
                  color: 'black',
                  borderRadius: 10,
                  borderColor: '#BCCCDC',
                  borderWidth: 1,
                  overflow: 'hidden'
                }}
                placeholder='Choose your Interest'
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }
              >
                <Picker.Item label='Java' value='java' color='#BCCCDC' />
                <Picker.Item label='C++' value='cpp' color='#BCCCDC' />
                <Picker.Item label='Python' value='py' color='#BCCCDC' />
              </Picker>
            </View>
          </View>

          {/* LOCATION! */}
          <View style={{}}>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                width: '99%'
              }}
            >
              <Text style={{ color: '#9AA6B2', fontFamily: 'NotoLight' }}>
                Location*
              </Text>
            </View>
            <TextInput
              value={location}
              onChangeText={text => setLocation(text)}
              placeholder='Your current location'
              style={{
                backgroundColor: '#FAFAFAFF',
                borderRadius: 10,
                padding: 15,
                borderColor: '#BCCCDC',
                borderWidth: 1
              }}
              numberOfLines={1}
              placeholderTextColor={'#BCCCDC'}
            />
          </View>
        </View>

        <View style={{ margin: 20 }}>
          <Pressable
            style={{
              backgroundColor: '#0D69C0',
              paddingVertical: 13,
              borderRadius: 50
            }}
            onPress={() => {
              router.push('/(tabs)/home')
            }}
          >
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: '500',
                fontFamily: 'NotoBold'
              }}
            >
              Save
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  )
}
