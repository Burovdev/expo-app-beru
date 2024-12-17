import {
    TextInput,
    View,
    Text,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
    TextInputProps,
  } from "react-native";  

interface InputFieldProps extends TextInputProps{
    label: string;
    placeholder: string;
}

export const InputField = ({label, placeholder, ...props}: InputFieldProps) => {
    return(
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="my-2 w-full">
            <Text className={`text-lg mb-3 ml-4`}>
              {label}
            </Text>
            <View
              className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 `}
            >
              <TextInput
                className={`rounded-full w-full p-4 border border-gray-500 text-left`}
                placeholder={placeholder}
                {...props}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
}