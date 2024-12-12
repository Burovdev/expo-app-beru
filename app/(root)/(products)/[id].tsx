import { router, useGlobalSearchParams } from "expo-router"
import { View, Text, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

const ProductPage = () => {
    const { id } = useGlobalSearchParams();

    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity onPress={ () => router.back()}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
            <Text>{id}</Text>
        </SafeAreaView>
    )
}

export default ProductPage