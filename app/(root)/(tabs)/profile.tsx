import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserButton } from "@/components/auth/user-button";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
import { router } from "expo-router";

const ProfilePage = () => {
  return (
    <SafeAreaView>
      <View className="profile-lines">
        <UserButton
          name="Autorized User"
          img="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbiUyMGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
        />
        <View className="flex flex-row gap-5">
          <TouchableOpacity>
            <MaterialIcons name="support-agent" size={26} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="settings" size={26} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => router.push("/messages")} className="profile-lines">
        <View className="flex flex-row gap-4 items-center">
          <MaterialCommunityIcons
            name="android-messages"
            size={26}
            color="black"
          />
          <Text className="font-semibold text-xl">Messages</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={26} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/orders")} className="profile-lines">
        <View className="flex flex-row gap-4 items-center">
          <MaterialIcons name="local-offer" size={26} color="black" />
          <Text className="font-semibold text-xl">Your orders</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={26} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/reviews")} className="profile-lines">
        <View className="flex flex-row gap-4 items-center">
          <MaterialIcons name="reviews" size={26} color="black" />
          <Text className="font-semibold text-xl">Your reviews</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={26} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/balance")} className="profile-lines">
        <View className="flex flex-row gap-4 items-center">
          <MaterialIcons name="payment" size={26} color="black" />
          <Text className="font-semibold text-xl">Credit balance</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={26} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/addresses")} className="profile-lines">
        <View className="flex flex-row gap-4 items-center">
          <Entypo name="location-pin" size={26} color="black" />
          <Text className="font-semibold text-xl">Addresses</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={26} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfilePage;
