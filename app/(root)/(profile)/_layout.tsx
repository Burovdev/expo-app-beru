import { Stack } from "expo-router"

const ProfileLayout = () => {
    return(
        <Stack>
            <Stack.Screen name="orders" options={{ headerShown: true }}/>
            <Stack.Screen name="user" options={{ headerShown: true }}/>
            <Stack.Screen name="reviews" options={{ headerShown: true }}/>
            <Stack.Screen name="messages" options={{ headerShown: true }}/>
            <Stack.Screen name="addresses" options={{ headerShown: true }}/>
            <Stack.Screen name="balance" options={{ headerShown: true }}/>
        </Stack>
    )
} 

export default ProfileLayout