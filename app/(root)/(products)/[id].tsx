import { products } from "@/constants";
import { router, useGlobalSearchParams } from "expo-router";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ShoppingCard } from "@/components/shopping-card";
import React from "react";
import { useCartStore } from "@/lib/store/cartStore";

const ProductPage = () => {
    const { id } = useGlobalSearchParams();
    const MemoizedShoppingCard = React.memo(ShoppingCard);
    const { cart, addToCart } = useCartStore();
  
    const product = products.find((product) => product.id === id);
    const relatedProducts = products.filter(
      (item) => item.category === product?.category && item.id !== product?.id
    );
    const isInCart = cart.some((item) => item.id === product?.id);
  
    const handleAddToCart = () => {
      if (product) {
        addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        });
      }
    };
  
  
    return (
      <SafeAreaView className="relative">
        <View className="relative px-5 py-5 overflow-hidden h-[400px]">
          <TouchableOpacity
            onPress={() => router.back()}
            className="size-14 rounded-full flex justify-center bg-black/40 relative z-20"
          >
            <Ionicons
              name="chevron-back"
              size={26}
              color="white"
              className="ml-3"
            />
          </TouchableOpacity>
          <Image
            source={{ uri: product?.image }}
            style={{
              width: 450,
              height: 400,
              resizeMode: "cover",
            }}
            className="absolute"
          />
        </View>
        <View className="p-5">
          <Text className="text-base font-medium">{product?.description}</Text>
          <View className="flex flex-row justify-between">
            <Text className="text-xl font-bold">{product?.name}</Text>
            <Text className="text-base text-yellow-500">
              ⭐ {product?.rating} (
              {product?.inStock ? "In Stock" : "Out of Stock"})
            </Text>
          </View>
          <View className="flex flex-row gap-4 items-center">
            <Text className="text-lg font-bold">{product?.price}$</Text>
            <Text className="text-base font-medium line-through text-slate-500">
              {product?.price && (product.price + Math.random() * 10).toFixed(2)}$
            </Text>
          </View>
        </View>
        <View className="px-5 pt-5 bg-white">
          <Text className="text-xl font-medium self-start px-5">
            {relatedProducts.length > 0
              ? "Related products:"
              : "There are no more products in this category"}
          </Text>
        </View>
        <View className="h-[330px] overflow-hidden py-5 flex items-center bg-white">
          <FlatList
            data={relatedProducts}
            renderItem={({ item }) => (
              <View className="m-2">
                <MemoizedShoppingCard product={item} />
              </View>
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            windowSize={5}
            contentContainerStyle={{ paddingBottom: 80 }}
          />
        </View>
        <View className="absolute bottom-[50px] h-24 w-full bg-white z-40 flex px-5 flex-row items-center">
         
        <TouchableOpacity
          className={`h-16 w-full rounded-full flex items-center justify-center ${
            isInCart ? "bg-gray-400" : "bg-main-blue"
          }`}
          onPress={handleAddToCart}
          disabled={isInCart || !product?.inStock}
        >
          <Text className="text-white font-semibold text-2xl">
            {isInCart ? "Already in Cart" : "Add to Cart"}
          </Text>
        </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  export default ProductPage;
  
