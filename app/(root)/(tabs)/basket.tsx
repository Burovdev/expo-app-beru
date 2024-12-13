import { SafeAreaView } from "react-native-safe-area-context"
import { Text, View, Image, TouchableOpacity, FlatList } from "react-native"
import { useCartStore } from "@/lib/store/cartStore";
import React from "react";
import { CartItem } from "@/components/cart-item";

const BasketPage = () => {
    const { cart, removeFromCart } = useCartStore();
    const MemoizedCartItem = React.memo(CartItem)

    return(
        <SafeAreaView className="flex-1 bg-white px-4">
      <Text className="text-2xl font-bold mb-5 text-center">Your Cart</Text>
      {cart.length === 0 ? (
        <View className="flex-1 justify-center items-center">
          <Text className="text-base text-gray-500">Your cart is empty!</Text>
        </View>
      ) : (
        <FlatList
          data={cart}
          renderItem={({ item }) => (
            <MemoizedCartItem
              item={item}
              onRemove={() => removeFromCart(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
    )
}

export default BasketPage