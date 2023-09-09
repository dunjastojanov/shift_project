import { Pressable } from "react-native";

export function IconButton({children, onPress}) {

    return (
        <Pressable onPress={onPress}>{children}</Pressable>
    )
    
}