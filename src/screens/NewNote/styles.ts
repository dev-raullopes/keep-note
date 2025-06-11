import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
     container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 60,
        paddingHorizontal: 24,
        paddingBottom: 30,
    },
     titleApp: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 20,
        textAlign: "center",
    },
    inputTitle: {
        height: 50,
        backgroundColor: "#f9f9f9",
        borderRadius: 8,
        paddingHorizontal: 16,
        fontSize: 16,
        color: "#999",
        marginBottom: 20,
    },
    content: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        borderRadius: 8,
        padding: 20,
        fontSize: 16,
    },
    buttonSave: {
        backgroundColor: "#27AE60",
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 20,
    },
    textButton: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    }
})