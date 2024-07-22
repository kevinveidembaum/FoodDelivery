import { View, Pressable, Text } from "react-native";
import { Feather } from '@expo/vector-icons'


export function Header(){
    return (
        <View className="w-full flex flex-row items-center justify-between">
            <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                <Feather name="menu" size={20} color="#121212"/>
            </Pressable>


            <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                <Feather name="bell" size={20} color="#121212"/>
            </Pressable>


        </View>       
    );
}