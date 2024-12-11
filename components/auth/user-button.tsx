import { Image, View, Text } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';

interface UserButtonProps{
    name: string,
    img?: string,
}

export const UserButton = ({name, img}: UserButtonProps) => {
    return (
        <View className="flex flex-row items-center gap-4">
            {img ? (
                <Image source={{ uri: img}} style={{ width: 40, height: 40 }} className="rounded-full"/>
            ) : (
                <View className="size-10 rounded-full bg-main-blue flex justify-center items-center">
                    <AntDesign name="user" size={24} color="white" />
                </View>
            )}
            <Text className="font-semibold text-3xl">{name}</Text>
        </View>
    )
}