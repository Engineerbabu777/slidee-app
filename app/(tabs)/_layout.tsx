import { Tabs } from 'expo-router'

export default function TabLayout () {
  return (
    <>
      <Tabs>
        {/* HOME TAB! */}
        <Tabs.Screen name='home' options={{ headerShown: false }} />
      </Tabs>
    </>
  )
}
