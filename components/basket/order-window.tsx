import { useCartStore } from "@/lib/store/cartStore";
import { calculateTotal } from "@/lib/utils";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { InputField } from "../input-field";
import { useState } from "react";
import { paymentMethods } from "@/constants";

interface OrderWindowProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const OrderWindow = ({ isOpen, setIsOpen }: OrderWindowProps) => {
  const { cart } = useCartStore();
  const [selected, setSelected] = useState("creditCard");

  return (
    isOpen && (
      <View className="absolute z-50 bottom-[110px] bg-gray-100 w-full h-[500px] rounded-xl p-5">
        <View className="flex flex-row justify-between items-center">
          <Text className="text-2xl font-bold">Enter order details</Text>
          <TouchableOpacity
            onPress={() => setIsOpen(!isOpen)}
            className="size-10 rounded-full bg-main-blue flex items-center justify-center"
          >
            <Text className="text-white text-lg font-semibold">X</Text>
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
        <View className="py-5">
            <Text className="text-lg font-semibold ml-6  mb-3">Choose payment method</Text>
      {paymentMethods.map((method) => (
        <TouchableOpacity
          key={method.id}
          onPress={() => setSelected(method.id)}
          className={`flex flex-row items-center p-4 rounded-lg ${
            selected === method.id ? "bg-main-blue" : "bg-neutral-100"
          }`}
        >
          <View
            className={`w-6 h-6 rounded-full border-2 mr-4 ${
              selected === method.id ? "border-main-blue bg-main-blue" : "border-gray-400"
            }`}
          />
          <Text className={`${selected === method.id ? "text-white" : "text-black"}`}>
            {method.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
          <View>
            <InputField
              label="Delivery country"
              placeholder="Enter your country"
            />
            <InputField
              label="Delivery region"
              placeholder="Enter your region"
            />
            <InputField label="Delivery city" placeholder="Enter your city" />
            <InputField
              label="Delivery street"
              placeholder="Enter your street"
            />
            <InputField
              label="Zip code"
              placeholder="Enter your zip code"
            />
          </View>
        </ScrollView>
        <Text className="my-5 self-end text-lg font-semibold">
          Total for: {calculateTotal(cart).toFixed(2)}$
        </Text>
        <TouchableOpacity className="w-full flex items-center justify-center rounded-full h-16 bg-main-blue">
          <Text className="text-white font-semibold text-2xl">Confirm</Text>
        </TouchableOpacity>
      </View>
    )
  );
};
