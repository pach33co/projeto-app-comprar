import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#191919",
        paddingTop: 62
    },
    logo: {
        height: 36,
        width: 136
    },
    form: {
        width: "100%",
        paddingHorizontal: 16,
        gap: 8,
        marginTop: 40
    },
    content: {
        flex: 1,
        width: "100%",
        backgroundColor: "#636363",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        marginTop: 24,
        padding: 24,
        paddingTop: 32
    },
    header: {
        width: "100%",
        flexDirection: "row",
        gap: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#AFAFAF",
        paddingBottom: 12
    },
    clearButton: {
        marginLeft: "auto"
    },
    clearText: {
        fontSize: 12,
        color: "#BBBBBB",
        fontWeight: 600
    }
})