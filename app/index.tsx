import { router } from 'expo-router'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Page = () => {

  return (
    <SafeAreaView>
        <View className='h-full bg-main-blue flex justify-center items-center gap-10'>
            <Text className='uppercase text-white font-bold text-6xl'>Beru</Text>
            <TouchableOpacity onPress={() => router.push("/(tabs)/home")} className='flex justify-center px-20 py-5 bg-white rounded-full'>
                <Text className='text-main-blue text-lg font-semibold'>Authorize</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Page