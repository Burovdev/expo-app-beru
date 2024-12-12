import { Link } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";

interface ShoppingCardProps {
  product: ShoppingCard;
}

export const ShoppingCard = ({ product }: ShoppingCardProps) => {
  return (
    <Link
      href={`/(root)/(products)/${product.id}`}
      className="h-[300px] w-[200px] bg-slate-50 rounded-lg"
    >
        <View className="h-full w-full">
            <Image  source={{ uri: product.image }} style={{ width: 200, height: 200 }}/>
            <View className="flex flex-col px-2 pb-2 justify-between h-[100px]">
                <View>
                     <Text className="text-lg font-bold">{product.name}</Text>
                <Text className="mt-1">{product.category}</Text>
                </View>
               <View className="flex flex-row justify-between">
               <Text className="text-sm text-yellow-500">
            ⭐ {product.rating} ({product.inStock ? "In Stock" : "Out of Stock"})
          </Text>
          <Text>
            {product.price}$
          </Text>
               </View>
            </View>
        </View>
    </Link>
  );
};
