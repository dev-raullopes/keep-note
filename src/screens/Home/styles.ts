import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 60,
        paddingHorizontal: 24,
        paddingBottom: 30,
    },
    header: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    titleApp: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#000",
    },
    inputSearchContainer:{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    inputSearch: {
        height: 50,
        paddingHorizontal: 16,
        fontSize: 16,
        color: "#333",
    },
    content: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    }
})