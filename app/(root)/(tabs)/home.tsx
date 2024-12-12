import { categories, products } from "@/constants";
import { useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ShoppingCard } from "@/components/shopping-card";
import React from "react";

interface CategoryProps {
  title: string;
}

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Categories>("All");
  const filteredData = products.filter((product) => {
    const isInCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    const matchesSearchTerm =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());

    return isInCategory && matchesSearchTerm;
  });

  const handleSearch = (e: any) => {
    setSearchTerm(e.nativeEvent.text);
  }

  const MemoizedShoppingCard = React.memo(ShoppingCard);

  const Category = ({ title }: CategoryProps) => (
    <View className="h-full flex items-center justify-center mr-5">
      <TouchableOpacity
        onPress={() => setSelectedCategory(title as Categories)}
      >
        <Text
          className={`text-white font-semibold text-lg ${
            title === selectedCategory && "border-b border-white"
          }`}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const MemoizedCategory = React.memo(Category);

  return (
    <SafeAreaView>
      <FlatList
        data={categories}
        renderItem={({ item }) => <MemoizedCategory title={item.title} />}
        keyExtractor={(item) => item.id}
        horizontal
        className="h-20 bg-main-blue px-5"
        showsHorizontalScrollIndicator={false}
      />
      <View className="h-[150px] bg-main-blue flex pt-10 relative overflow-hidden">
        <View className="relative z-10">
          <Text className="text-3xl font-bold text-white uppercase text-center">
            New Year discounts
          </Text>
          <Text className="text-red-600 text-4xl font-bold uppercase text-center">
            up to 50%
          </Text>
        </View>
        <Image
          source={{
            uri: "https://thumbs.dreamstime.com/b/winter-christmas-snow-blue-tree-background-vector-winter-abstract-blue-background-christmas-tree-snowflakes-snow-forest-xmas-157352027.jpg",
          }}
          style={{ width: 450, height: 150 }}
          className="absolute top-0 w-full object-cover"
        />
      </View>
      <View className="h-[100px] bg-white border-b border-slate-400 py-3 px-5 flex justify-center">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput
            className="w-full h-16 border border-slate-400 rounded-full px-10"
            placeholder="Search products"
            onChange={handleSearch}
          />
        </KeyboardAvoidingView>
      </View>
      <View className="overflow-hidden h-[480px] py-5 flex items-center bg-white">
        <FlatList
          data={filteredData}
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
        />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
