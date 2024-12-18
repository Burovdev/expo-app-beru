import { useCartStore } from "@/lib/store/cartStore";
import { calculateTotal } from "@/lib/utils";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { InputField } from "../input-field";
import { useState } from "react";
import { paymentMethods } from "@/constants";
import { useOrderStore } from "@/lib/store/orderStore";

interface OrderWindowProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const OrderWindow = ({ isOpen, setIsOpen }: OrderWindowProps) => {
  const { cart, clearCart } = useCartStore();
  const [selected, setSelected] = useState("creditCard");
  const {
    orderHistory,
    confirmOrder,
    setItems,
    setPaymentMethod,
    setDeliveryPlace,
    setTotalPrice,
    getDetailedOrder,
  } = useOrderStore();
  const [deliveryDetails, setDeliveryDetails] = useState<DeliveryPlace>({
    country: "",
    region: "",
    city: "",
    street: "",
    zip: "",
  });

  const resetDeliveryDetails = () => {
    setDeliveryDetails({
      country: "",
      region: "",
      city: "",
      street: "",
      zip: "",
    });
  };

  const handleConfirmOrder = () => {
    if (
      !deliveryDetails.country ||
      !deliveryDetails.region ||
      !deliveryDetails.city ||
      !deliveryDetails.street ||
      !deliveryDetails.zip
    ) {
      Alert.alert("Error", "Please fill in all delivery details.");
      return;
    }
  
    setItems(cart);
    setPaymentMethod(selected);
    setDeliveryPlace(deliveryDetails);
    setTotalPrice(calculateTotal(cart));
  
    confirmOrder();
  
    clearCart();
    resetDeliveryDetails();
    setSelected("creditCard");
    setIsOpen(false);
  
    Alert.alert("Success", "Your order has been confirmed!");
  };

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
            <Text className="text-lg font-semibold ml-6  mb-3">
              Choose payment method
            </Text>
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
                    selected === method.id
                      ? "border-main-blue bg-main-blue"
                      : "border-gray-400"
                  }`}
                />
                <Text
                  className={`${
                    selected === method.id ? "text-white" : "text-black"
                  }`}
                >
                  {method.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View>
            <Text className="text-lg font-semibold ml-6  mb-3">
              Enter delivery details
            </Text>
            <InputField
              label="Delivery country"
              placeholder="Enter your country"
              value={deliveryDetails.country}
              onChangeText={(text) =>
                setDeliveryDetails((prev) => ({ ...prev, country: text }))
              }
            />
            <InputField
              label="Delivery region"
              placeholder="Enter your region"
              value={deliveryDetails.region}
              onChangeText={(text) =>
                setDeliveryDetails((prev) => ({ ...prev, region: text }))
              }
            />
            <InputField
              label="Delivery city"
              placeholder="Enter your city"
              value={deliveryDetails.city}
              onChangeText={(text) =>
                setDeliveryDetails((prev) => ({ ...prev, city: text }))
              }
            />
            <InputField
              label="Delivery street"
              placeholder="Enter your street"
              value={deliveryDetails.street}
              onChangeText={(text) =>
                setDeliveryDetails((prev) => ({ ...prev, street: text }))
              }
            />
            <InputField
              label="Zip code"
              placeholder="Enter your zip code"
              value={deliveryDetails.zip}
              onChangeText={(text) =>
                setDeliveryDetails((prev) => ({ ...prev, zip: text }))
              }
            />
          </View>
        </ScrollView>
        <Text className="my-5 self-end text-lg font-semibold">
          Total for: {calculateTotal(cart).toFixed(2)}$
        </Text>
        <TouchableOpacity className="w-full flex items-center justify-center rounded-full h-16 bg-main-blue"
        onPress={handleConfirmOrder}
        >
          <Text className="text-white font-semibold text-2xl">Confirm</Text>
        </TouchableOpacity>
      </View>
    )
  );
};
