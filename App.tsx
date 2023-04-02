import './src/lib/dayjs'
import { StatusBar } from 'react-native';
import { 
  useFonts, 
  Inter_400Regular, 
  Inter_600SemiBold, 
  Inter_700Bold, 
  Inter_800ExtraBold
} from '@expo-google-fonts/inter';

import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';

import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: true
  })
})

export default function App() {
  useEffect(() => {

    async function requestPermissions() {
      const { granted } = await Notifications.requestPermissionsAsync();
      if (!granted) {
        alert('Ative as notificações para receber lembretes diários!');
      }
    }
    
    requestPermissions();

    const trigger = new Date(Date.now())
    trigger.setMinutes(trigger.getMinutes() + 1)

    async function cancelNotifications() {
      await Notifications.cancelAllScheduledNotificationsAsync();
    }

    cancelNotifications()

    async function scheduleNotification() {
      const notificationId = await Notifications.scheduleNotificationAsync({
        content: {
          title: "Você já marcou seus hábitos hoje?"
        },
        trigger: {
          hour: 22,
          minute: 0,
          repeats: true
        }
      })
      
      // console.log(`Notification ID: ${notificationId}`)
    }

    scheduleNotification()

  }, [])

  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_600SemiBold, 
    Inter_700Bold, 
    Inter_800ExtraBold
  });

  if (!fontsLoaded) {
    return (
      < Loading /> 
    );
  }

  return (
    <>
      <Routes />
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
    </>
  );
}
