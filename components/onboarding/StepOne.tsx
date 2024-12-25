import {
  Dimensions,
  Image,
  Pressable,
  StatusBar,
  Text,
  View
} from 'react-native'
import Entypo from '@expo/vector-icons/Entypo'

type StepOneProps = {
  currentStep: Number,
  handleNextStep: () => void
  handleSkip: () => void

}
export default function StepOne ({ currentStep, handleNextStep,handleSkip }: StepOneProps) {
  return (
    <>
      <View style={{ width: '100%' }}>
        <StatusBar barStyle={'dark-content'} />

        <View
          style={{
            width: '100%',
            height: Dimensions.get('screen').height * 0.4
          }}
        >
          <Image
            source={require('@/assets/images/onboarding/social-1.png')}
            resizeMode='cover'
            style={{ width: '100%', height: '100%' }}
          />
        </View>

        <View
          style={{
            marginTop: 70
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontFamily: 'NotoBold',
              textAlign: 'center'
            }}
          >
            Sharing your Idea
          </Text>
          <Text
            style={{
              fontSize: 16,
              textAlign: 'center',
              fontFamily: 'NotoLight',
              color: '#1E1E1E',
              width: '90%',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            The ultimate platform to connect, share, and discover. Experience
            real-time chatting, personalized profiles, and a vibrant community
            all in one place!
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 60
          }}
        >
          <View
            style={{
              backgroundColor: '#D9EAFD',
              borderRadius: 100,
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row'
            }}
          >
            <Entypo
              name='dot-single'
              size={24}
              color={`${currentStep === 0 ? 'black' : 'white'}`}
            />
            <Entypo
              name='dot-single'
              size={24}
              color={`${currentStep === 1 ? 'black' : 'white'}`}
            />
            <Entypo
              name='dot-single'
              size={24}
              color={`${currentStep === 2 ? 'black' : 'white'}`}
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 50,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            width: Dimensions.get('screen').width
          }}
        >
          {/* SKIP! */}
          <Pressable
            style={{
              width: '45%',
              backgroundColor: 'black',
              paddingVertical: 13,
              borderRadius: 50,

            }}
            onPress={handleSkip}
          >
            <Text
              style={{ color: 'white', textAlign: 'center', fontWeight: '500',              
                fontFamily: 'NotoBold',
              }}
            >
              Skip
            </Text>
          </Pressable>

          {/* NEXT! */}
          <Pressable
            style={{
              width: '45%',
              backgroundColor: '#0D69C0',
              paddingVertical: 13,
              borderRadius: 50
            }}
            onPress={handleNextStep}
          >
            <Text
              style={{ color: 'white', textAlign: 'center', fontWeight: '500',
                fontFamily: 'NotoBold',
               }}
            >
              Next
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  )
}
