import React from 'react'
import { Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const TabsLayout = () => {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: "#1b81db",
          paddingTop: 15,
          paddingBottom: 0, // ios only
          overflow: "hidden",
          marginBottom: 20,
          height: 80,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen 
      name="home"
      options={{
        title: "Home",
        headerShown: false,
        tabBarIcon: ({focused}) =>  <Entypo name="home" size={26} color={`${focused ? "white" : "black"}`} />
      }}
      /> 
      <Tabs.Screen
        name="categories"
        options={{
          title: "Category",
          headerShown: false,
          tabBarIcon: ({ focused }) => <MaterialIcons name="category" size={26} color={`${focused ? "white" : "black"}`}/>
        }}
      />
      <Tabs.Screen
        name="basket"
        options={{
          title: "Basket",
          headerShown: false,
          tabBarIcon: ({ focused }) => <FontAwesome name="shopping-basket" size={26} color={`${focused ? "white" : "black"}`} />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => <MaterialIcons name="account-circle" size={26} color={`${focused ? "white" : "black"}`} />
        }}
      />
     
    </Tabs>
  )
}

export default TabsLayout
