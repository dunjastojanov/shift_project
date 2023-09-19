import { Pressable } from "react-native";

export function IconButton({children, onPress, style}) {
    return (
        <Pressable onPress={onPress} style={style}>{children}</Pressable>
    )
}