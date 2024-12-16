import { useCartStore } from "@/lib/store/cartStore";
import { View, Image, Text, TouchableOpacity } from "react-native";

interface CartItemProps {
  item: CartItem;
}

export const CartItem = ({ item }: CartItemProps) => {
  const { addToCart, decreaseQuantity } = useCartStore();

  return (
    <View className="w-full flex flex-row items-center justify-between mb-4 bg-gray-100 rounded-lg p-4">
      <Image
        source={{ uri: item.image }}
        style={{ width: 50, height: 50 }}
        className="rounded-md"
      />
      <View className="flex-1 ml-4">
        <Text className="font-bold">{item.name}</Text>
        <Text className="text-sm text-gray-500">
          {item.quantity} x ${item.price}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => addToCart(item)}
        className="mr-3 border-gray-500 border-2 rounded-full size-6 flex items-center justify-center"
      >
        <Text className="text-gray-500 font-bold">+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => decreaseQuantity(item.id)}
        className="px-4 py-2 bg-red-500 rounded-lg"
      >
        <Text className="text-white">Remove</Text>
      </TouchableOpacity>
    </View>
  );
};
