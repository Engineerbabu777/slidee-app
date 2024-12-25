import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StatusBar,
  Alert,
  Image
} from 'react-native'
import React from 'react'
import Mail01Icon from '@/assets/icons/email.icon'
import SquareLock02Icon from '@/assets/icons/lock.icon'
import ViewOffSlashIcon from '@/assets/icons/hide.icon'
import { useRouter } from 'expo-router'
import Checkbox from 'expo-checkbox'

export default function CreateAccount () {
  const router = useRouter()

  return (
    <ScrollView>
      <StatusBar barStyle={'dark-content'} />

      <View
        style={{
          margin: 20
        }}
      >
        {/* WELCOME TEXT! */}
        <View
          style={{
            marginTop: 50,
            width: '100%'
          }}
        >
          <Text
            style={{
              fontFamily: 'NotoBold',
              fontSize: 24,
              textAlign: 'center',
              width: '100%'
            }}
          >
            Welcome to Slidee 👋
          </Text>
          <Text
            style={{
              fontFamily: 'NotoLight',
              color: '#8e8e8e',
              textAlign: 'center',
              width: '100%'
            }}
          >
            Enter your Email and Password to Sign in
          </Text>
        </View>

        {/* INPUTS! */}
        <View
          style={{
            marginTop: 50,
            gap: 20
          }}
        >
          {/* email! */}
          <View
            style={{
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
            <Mail01Icon color='#0D69C0' />
            <TextInput
              numberOfLines={1}
              style={{
                paddingHorizontal: 10,
                fontFamily: 'NotoMedium',
                flex: 1
              }}
              keyboardType='email-address'
              autoComplete='email'
              placeholder='Your Email'
              placeholderTextColor={'#BCCCDC'}
              onChange={() => {}}
            />
          </View>

          {/* password! */}
          <View
            style={{
              borderRadius: 100,
              backgroundColor: '#FAFAFAFF',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              overflow: 'hidden',
              paddingVertical: 4,
              borderColor: '#BCCCDC',
              borderWidth: 1,

              gap: 5
            }}
          >
            <SquareLock02Icon color='#0D69C0' />
            <TextInput
              numberOfLines={1}
              style={{
                paddingHorizontal: 10,
                fontFamily: 'NotoMedium',

                flex: 1
              }}
              secureTextEntry
              placeholder='Password'
              placeholderTextColor={'#BCCCDC'}
              onChange={() => {}}
            />
            {/* hide-eye */}
            <ViewOffSlashIcon color='#5C5470' />
          </View>
        </View>

        {/* REMEMBER ME && FORGOT PASSWORD! */}
        <View
          style={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* REMEMBER ME! */}
          <View style={{ flexDirection: 'row', gap: 4 }}>
            <Checkbox
              value={false}
              onChange={() => {}}
              style={{ borderRadius: 3 }}
              color={'#BCCCDC'}
            />
            <View>
              <Text style={{ fontFamily: 'NotoBold', fontSize: 12 }}>
                Remember me
              </Text>
            </View>
          </View>

          {/* FORGOT PASSWORD! */}
          <View style={{}}>
            <Text
              style={{ fontSize: 12, fontFamily: 'NotoBold', color: '#0D69C0' }}
            >
              Forgot Password?
            </Text>
          </View>
        </View>

        {/* LOGIN ACCOUNT BUTTON! */}
        <Pressable
          style={{
            marginTop: 30,
            backgroundColor: '#0D69C0',
            paddingVertical: 13,
            borderRadius: 50
          }}
          onPress={() => {
            router.push('/(auth)/email-sent')
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
            Sign in
          </Text>
        </Pressable>

        {/* OR! */}
        <View
          style={{
            gap: 10,
            flexDirection: 'row',
            marginTop: 30,
            alignItems: 'center'
          }}
        >
          {/* LINE! */}
          <View style={{ height: 1, flex: 1, backgroundColor: '#BCCCDC' }} />

          <Text style={{ fontFamily: 'NotoBold' }}>OR</Text>

          {/* LINE */}
          <View style={{ height: 1, flex: 1, backgroundColor: '#BCCCDC' }} />
        </View>

        {/* SIGN IN WITH GOOGLE && APPLE! */}
        <View style={{ gap: 10 }}>
          {/* GOOGLE BUTTON! */}
          <Pressable
            style={{
              marginTop: 30,
              backgroundColor: 'white',
              paddingVertical: 13,
              borderRadius: 15,
              borderColor: '#BCCCDC',
              borderWidth: 1
            }}
            onPress={() => {
              Alert.alert('Creating new user...')
            }}
          >
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 5,
                flexDirection: 'row'
              }}
            >
              <Image
                source={require('@/assets/images/google.png')}
                style={{ width: 25, height: 25 }}
              />
              <Text
                style={{
                  color: 'black',
                  textAlign: 'center',
                  fontFamily: 'NotoBold',
                  fontSize: 16
                }}
              >
                Continue with Google
              </Text>
            </View>
          </Pressable>

          {/* APPLE BUTTON! */}
          <Pressable
            style={{
              backgroundColor: 'black',
              paddingVertical: 13,
              borderRadius: 15,
              borderColor: '#BCCCDC',
              borderWidth: 1
            }}
            onPress={() => {
              Alert.alert('Creating new user...')
            }}
          >
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 5,
                flexDirection: 'row'
              }}
            >
              <Image
                source={require('@/assets/images/apple.png')}
                style={{ width: 25, height: 25, filter: 'invert(1)' }}
              />
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontFamily: 'NotoBold',
                  fontSize: 16
                }}
              >
                Continue with Apple
              </Text>
            </View>
          </Pressable>
        </View>

        {/* NO ACCOUNT! */}
        <View style={{ marginTop: 20 }}>
          <Text style={{ textAlign: 'center', fontFamily: 'NotoMedium' }}>
            Don't Have an account? {/* <Pressable> */}
            <Text
              onPress={() => router.push('/(auth)/create-account')}
              style={{ fontFamily: 'NotoBold', color: '#0D69C0' }}
            >
              Sign Up
            </Text>
            {/* </Pressable> */}
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}
