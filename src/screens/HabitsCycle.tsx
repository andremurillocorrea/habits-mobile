import { ScrollView, Text, View } from "react-native";
import CircularProgress from 'react-native-circular-progress-indicator'
import colors from "tailwindcss/colors";

export function HabitsCycle() {
  return (
    <ScrollView className="mt-6">
      <View className="flex-row">
        <CircularProgress 
          value={10}
          // initialValue={0}
          maxValue={20}
          // radius={40}
          // progressValueColor={colors.white}
          // activeStrokeColor={colors.green[400]}
          // inActiveStrokeColor={colors.green[400]}
          // inActiveStrokeOpacity={0.2}
        />
        <Text>Hello World</Text>
      </View>
    </ScrollView>
  )
}