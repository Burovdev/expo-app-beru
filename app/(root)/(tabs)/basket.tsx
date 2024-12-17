import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import { useCartStore } from "@/lib/store/cartStore";
import React, { useState } from "react";
import { CartItem } from "@/components/cart-item";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { calculateTotal } from "@/lib/utils";
import { OrderWindow } from "@/components/basket/order-window";

const BasketPage = () => {
  const [openCart, setOpenCart] = useState<boolean>(false);
  const { cart, clearCart } = useCartStore();
  const MemoizedCartItem = React.memo(CartItem);

  return (
    <SafeAreaView className="h-screen flex flex-col items-center bg-white px-4 relative">
      <Text className="text-2xl font-bold mb-5 text-center">Your Cart</Text>
      {cart.length !== 0 && (
        <TouchableOpacity
          className="size-10 rounded-full bg-main-blue self-end flex items-center justify-center mb-5"
          onPress={() => {
            clearCart()
            setOpenCart(false)
          }}
        >
          <MaterialCommunityIcons name="cancel" size={26} color="white" />
        </TouchableOpacity>
      )}
      {cart.length === 0 ? (
        <View className=" flex-1 justify-center items-center">
          <Text className="text-base text-gray-500">Your cart is empty!</Text>
        </View>
      ) : (
        <View className={`${openCart ? "h-[200px]" : "h-auto"}`}>
          <FlatList
          data={cart}
          renderItem={({ item }) => <MemoizedCartItem item={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
        </View>
        
      )}
      {cart.length !== 0 && (
        <TouchableOpacity className="absolute w-full flex items-center justify-center rounded-full h-16 bg-main-blue bottom-36" onPress={() => setOpenCart(!openCart)}>
          <Text className="text-white font-semibold text-2xl">Buy for {calculateTotal(cart).toFixed(2)}$</Text>
        </TouchableOpacity>
      )}
      <OrderWindow isOpen={openCart} setIsOpen={setOpenCart}/>
    </SafeAreaView>
  );
};

export default BasketPage;
