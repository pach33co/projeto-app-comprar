import { FilterStatus } from "@/types/FilterStatus";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { style } from "./styles";
import { StatusIcon } from "../StatusIcon";


type TFilterProps = TouchableOpacityProps & {
    status: FilterStatus
    isActive: boolean
}

export function Filter({ status, isActive, ...rest }: TFilterProps) {
    return (
        <TouchableOpacity
            style={[style.container, { opacity: isActive ? 1 : 0.5 }]}
            activeOpacity={0.8}
            {...rest}
        >
            <StatusIcon status={status} />
            <Text style={style.title}>
                {status === FilterStatus.DONE ? "Comprados" : "Pendentes"}
            </Text>
        </TouchableOpacity>
    )
}