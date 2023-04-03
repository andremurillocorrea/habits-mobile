import { Button, ScrollView, Text, View, Alert } from "react-native";

import { useRef, useCallback, useState } from 'react'


import { api } from '../lib/axios'
import { Loading } from '../components/Loading'

import { HabitCycle } from '../components/HabitCycle'

type SummaryProps = Array<{
  id: string,
  date: string,
  amount: number,
  completed: number
}>

export function HabitsCycle() {

  // const [loading, setLoading] = useState(false)
  // const [summary, setSummary] = useState<SummaryProps | null>(null)

  // async function fetchData() {
  //   try {
  //     setLoading(true)
  //     const response = await api.get('/summary')
  //     setSummary(response.data)
  //   } catch (error) {
  //     Alert.alert('Ops', 'Não foi possível carregar o sumário de hábitos')
  //     console.log(error)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  // useFocusEffect(useCallback(() => {
  //   fetchData()
  // }, []))

  // if (loading) {
  //   return (
  //     <Loading />
  //   )
  // }


  return (
    <ScrollView className="mt-6">
      <HabitCycle title="Beber água" value={10}/>
      <HabitCycle title="Beber água" value={15}/>
      <HabitCycle title="Beber água" value={20}/>
    </ScrollView>
  )
}