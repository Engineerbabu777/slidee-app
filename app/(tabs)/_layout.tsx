import { Tabs } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo'
import AntDesign from '@expo/vector-icons/AntDesign'
import Fontisto from '@expo/vector-icons/Fontisto'
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function TabLayout () {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            paddingBottom: 10,
            paddingTop: 5,
            height: 60,
            borderTopWidth: 1,
            borderTopColor: '#BCCCDC'
          }
        }}
      >
        {/* HOME TAB! */}
        <Tabs.Screen
          name='home'
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Entypo
                name='home'
                size={24}
                color={focused ? 'black' : '#BCCCDC'}
              />
            )
          }}
        />

        {/* SEARCH */}
        <Tabs.Screen
          name='search'
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <AntDesign
                name='search1'
                size={24}
                color={focused ? 'black' : '#BCCCDC'}
              />
            )
          }}
        />

        {/* MESSAGES! */}
        <Tabs.Screen
          name='messages'
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Fontisto
                name='email'
                size={24}
                color={focused ? 'black' : '#BCCCDC'}
              />
            )
          }}
        />

        {/* PROFILE! */}
        <Tabs.Screen
          name='profile'
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome
                name='user-circle-o'
                size={24}
                color={focused ? 'black' : '#BCCCDC'}
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}
