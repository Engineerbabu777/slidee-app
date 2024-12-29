import { useRouter } from 'expo-router'
import React from 'react'
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Dimensions,
  Image,
  Pressable,
  TextInput,
  KeyboardAvoidingView
} from 'react-native'

export default function Index () {
  const router = useRouter()
  return (
    <ScrollView>
      <StatusBar barStyle={'dark-content'} />

      <View
        style={{
          marginTop: 40,
          width: '100%',
          height: Dimensions.get('screen').height * 0.4
        }}
      >
        <Image
          source={require('@/assets/images/mail-sent.png')}
          resizeMode='cover'
          style={{ width: '100%', height: '100%' }}
        />
      </View>

      <View style={{ margin: 20 }}>
        {/* TOP TEXT! */}
        <View style={{}}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'NotoBold',
              fontSize: 24
            }}
          >
            Verify your email
          </Text>
        </View>
        {/* SOME TEXT && BUTTONS TO GO BACK! */}
        <View style={{ margin: 1 }}>
          <Text
            style={{
              fontFamily: 'NotoMedium',
              textAlign: 'center',
              color: '#8e8e8e'
            }}
          >
            A verification code has been sent to your email address. Please
            check your inbox and enter the code below.
          </Text>

          {/* VERIFICATION INPUT! */}
          <View
            style={{
              marginTop: 20,
              borderRadius: 100,
              backgroundColor: '#FAFAFAFF',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              paddingVertical: 4,
              overflow: 'hidden',
              borderColor: '#BCCCDC',
              borderWidth: 1,

              gap: 5
            }}
          >
            <TextInput
              numberOfLines={1}
              style={{
                paddingHorizontal: 10,
                fontFamily: 'NotoMedium',
                flex: 1
              }}
              keyboardType='default'
              autoComplete='email'
              placeholder='Enter verification code here'
              placeholderTextColor={'#BCCCDC'}
              onChange={() => {}}
            />
          </View>

          {/* VERIFY! */}
          <Pressable
            style={{
              marginTop: 30,
              backgroundColor: '#0D69C0',
              paddingVertical: 13,
              borderRadius: 50
            }}
            onPress={() => {
              router.push('/(auth)/create-profile')
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
              Verify
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  )
}
