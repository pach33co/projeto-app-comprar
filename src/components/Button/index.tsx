import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";


type TButtonProps = TouchableOpacityProps & {
    title: string
}

export function Button({ title, ...rest }: TButtonProps) {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
            {...rest}
        >
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}