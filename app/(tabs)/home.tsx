import { useState } from 'react'
import { StatusBar, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Entypo from '@expo/vector-icons/Entypo'

export default function Home () {
  const [activeTab, setActiveTab] = useState(0)

  const handleChangeTab = (index: number) => {
    setActiveTab(index)
  }

  return (
    <>
      <StatusBar barStyle={'dark-content'} />

      <View>
        {/* TOP! */}
        <View
          style={{
            paddingTop: 15,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: '10%',
            justifyContent: 'space-evenly',
            paddingVertical: 10,
            backgroundColor: 'white',
            overflow: 'visible',
            borderBottomColor:'#BCCCDC',
            borderBottomWidth:0.5
          }}
        >
          <Text
            style={{
              fontFamily: 'NotoMedium',
              fontSize: 16,
              color: activeTab === 0 ? 'black' : '#BCCCDC'
            }}
            onPress={() => handleChangeTab(0)}
          >
            Feeds
          </Text>
          <Text
            style={{
              fontFamily: 'NotoMedium',
              fontSize: 16,
              color: activeTab === 1 ? 'black' : '#BCCCDC'
            }}
            onPress={() => handleChangeTab(1)}
          >
            Community
          </Text>
          <Text
            style={{
              fontFamily: 'NotoMedium',
              fontSize: 16,
              color: activeTab === 2 ? 'black' : '#BCCCDC'
            }}
            onPress={() => handleChangeTab(2)}
          >
            Explore
          </Text>
          <View style={{ position: 'relative', overflow: 'visible' }}>
            <Ionicons name='notifications-outline' size={24} color='black' />
            <View
              style={{
                position: 'absolute',
                width: 10,
                height: 10,
                backgroundColor: 'red',
                right: 2,
                borderRadius: 100
              }}
            ></View>
          </View>
        </View>

        {/* BELOW POST! */}
      </View>
    </>
  )
}
