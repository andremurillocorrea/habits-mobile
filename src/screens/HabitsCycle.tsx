import { Button, ScrollView, Text, View, Alert } from "react-native";

import { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'


import { api } from '../lib/axios'
import { Loading } from '../components/Loading'

import { HabitCycle } from '../components/HabitCycle'

type CycleProps = Array<{
  id: string,
  title: string,
  count_consecutive: number
}>

export function HabitsCycle() {

  const [loading, setLoading] = useState(false)
  const [cycle, setCycle] = useState<CycleProps | null>(null)

  async function fetchData() {
    try {
      setLoading(true)
      const response = await api.get('/cycle')
      setCycle(response.data)
    } catch (error) {
      Alert.alert('Ops', 'Não foi possível carregar a frequência dos hábitos')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchData()
  }, []))

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <ScrollView 
      className="mt-6"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      {
        cycle?.map(habitCycle => (
          <HabitCycle key={habitCycle.id} title={habitCycle.title} value={habitCycle.count_consecutive}/>
        ))
      }
    </ScrollView>
  )
}