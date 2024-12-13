import { View, Image, Text, TouchableOpacity } from "react-native";

interface CartItemProps {
  item: CartItem;
  onRemove: () => void;
}

export const CartItem = ({ item, onRemove }: CartItemProps) => {
  return (
    <View className="flex flex-row items-center justify-between mb-4 bg-gray-100 rounded-lg p-4">
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
        onPress={onRemove}
        className="px-4 py-2 bg-red-500 rounded-lg"
      >
        <Text className="text-white">Remove</Text>
      </TouchableOpacity>
    </View>
  );
};
