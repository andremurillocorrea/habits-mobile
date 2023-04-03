import { View, Text } from "react-native";
import CircularProgress from 'react-native-circular-progress-indicator'
import colors from "tailwindcss/colors";

interface Props {
  title: string,
  value: number
}

export function HabitCycle( { title, value } : Props) {
  return (
    <View className="flex-row my-4">
      <CircularProgress 
        value={value}
        maxValue={30}
        radius={40}
        duration={1000}
        progressValueColor={colors.white}
        activeStrokeColor={colors.green[500]}
        inActiveStrokeColor={colors.green[500]}
        inActiveStrokeOpacity={0.2}
      />
      <View className="flex-1 justify-center items-center">
        <Text className="color-white text-base ml-3 font-semibold">{title}</Text>  
      </View> 
    </View>
  )
}