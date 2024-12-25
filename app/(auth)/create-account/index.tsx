import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StatusBar,
  Alert
} from 'react-native'
import React from 'react'
import UserIconComponent from '@/assets/icons/user.icon'
import Mail01Icon from '@/assets/icons/email.icon'
import SquareLock02Icon from '@/assets/icons/lock.icon'
import ViewOffSlashIcon from '@/assets/icons/hide.icon'
import { useRouter } from 'expo-router'

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
            Signup and enjoy our community
          </Text>
        </View>

        {/* INPUTS! */}
        <View
          style={{
            marginTop: 50,
            gap: 20
          }}
        >
          <View
            style={{
              borderRadius: 100,
              backgroundColor: '#FAFAFAFF',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              overflow: 'hidden',
              paddingVertical: 4,
              borderWidth: 1,
              borderColor: '#BCCCDC',

              gap: 5
            }}
          >
            <UserIconComponent color='#0D69C0' />
            <TextInput
              numberOfLines={1}
              style={{
                paddingHorizontal: 10,

                flex: 1
              }}
              placeholder='Username'
              placeholderTextColor={'#BCCCDC'}
              onChange={() => {}}
            />
          </View>
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

                flex: 1
              }}
              keyboardType='email-address'
              autoComplete='email'
              placeholder='Your Email'
              placeholderTextColor={'#BCCCDC'}
              onChange={() => {}}
            />
          </View>

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

          <View
            style={{
              borderRadius: 100,
              backgroundColor: '#FAFAFAFF',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              paddingVertical: 4,
              overflow: 'hidden',
              borderWidth: 1,
              borderColor: '#BCCCDC',

              gap: 5
            }}
          >
            <SquareLock02Icon color='#0D69C0' />
            <TextInput
              numberOfLines={1}
              style={{
                paddingHorizontal: 10,

                flex: 1
              }}
              secureTextEntry
              placeholder='Confirm Password'
              placeholderTextColor={'#BCCCDC'}
              onChange={() => {}}
            />
            {/* hide-eye */}
            <ViewOffSlashIcon color='#5C5470' />
          </View>
        </View>

        {/* CONDITIONS TEXT! */}
        <View style={{ width: '75%', marginHorizontal: 'auto', marginTop: 10 }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'NotoLight',
              color: '#9AA6B2'
            }}
          >
            By continuing you agree to our
            <Text style={{ fontFamily: 'NotoBold', color: 'black' }}>
              {' '}
              Terms of Service
            </Text>{' '}
            and
            <Text style={{ fontFamily: 'NotoBold', color: 'black' }}>
              {' '}
              Privacy Policy
            </Text>
          </Text>
        </View>

        {/* CREATE ACCOUNT BUTTON! */}
        <Pressable
          style={{
            marginTop: 30,
            backgroundColor: '#0D69C0',
            paddingVertical: 13,
            borderRadius: 50
          }}
          onPress={() => {
            Alert.alert('Creating new user...')
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
            Create Account
          </Text>
        </Pressable>

        {/* already account? */}
        <View style={{ marginTop: 20 }}>
          <Text style={{ textAlign: 'center', fontFamily: 'NotoMedium' }}>
            Already have an account? {/* <Pressable> */}
            <Text
              onPress={() => router.push('/(auth)/login')}
              style={{ fontFamily: 'NotoBold', color: '#0D69C0' }}
            >
              Sign In
            </Text>
            {/* </Pressable> */}
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}
