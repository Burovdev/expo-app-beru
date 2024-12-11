import { View } from "react-native"

interface ShoppingCardProps{
    id: string,
    name: string,
    price: number,
    description: string,
    rating: number,
    category: Categories,
    image: string,
    inStock: boolean
}

export const ShoppingCard = ({id, name, price, description, rating, category, image, inStock}: ShoppingCardProps) => {
    return (
        <View></View>
    )
}