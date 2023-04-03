import { View, useWindowDimensions, Text } from 'react-native'
import { useState, useRef } from 'react'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import colors from "tailwindcss/colors";

import { Header } from '../components/Header'

import { HabitsOverview } from './HabitsOverview'
import { HabitsCycle } from './HabitsCycle'


const renderScene = SceneMap({
  overview: HabitsOverview,
  cycle: HabitsCycle
})

// const renderScene = ({ route, jumpTo }) => {
//   switch (route.key) {
//     case 'overview':
//       return <HabitsOverview />
//     case 'cycle':
//       return <HabitsCycle />
//   }
// }

export function Home() {
  
  const layout = useWindowDimensions()

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'overview', title: 'Overview' },
    { key: 'cycle', title: 'Cycle' },
  ]);

  // const progressRef = useRef<ProgressRef>(null)

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />
      

      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        // lazy={({ route }) => route.key === 'cycle'}
        // onSwipeEnd={() => reAnimateProgressCircle(progressRef)}
        renderTabBar={props => <TabBar 
          {...props} 
          style={{ backgroundColor: colors.zinc[900], height: 5, borderRadius: 5}}
          indicatorStyle={{ backgroundColor: colors.zinc[800], height: 5, borderRadius: 5}}
          indicatorContainerStyle={{ backgroundColor: colors.zinc[900], borderRadius: 5}}
        />}
      />

        
    </View>
  )
}