import { SafeAreaView } from "react-native-safe-area-context"
import { Image } from "react-native"

export const WrapperImage = ({children}: {children: React.ReactNode}) => {
    return(
        <SafeAreaView className="relative flex items-center">
            <Image source={{ uri: "https://i.pinimg.com/736x/c7/a3/d3/c7a3d3a545430c2bc81af76cfe9509a9.jpg"}} style={{ width: "100%", height: "97%",}} className=""/>
            {children}
        </SafeAreaView>
    )
}