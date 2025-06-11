import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 64,
        paddingHorizontal: 24,
        paddingBottom: 30,
    },
    titleApp: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 20,
    },
    inputSearchContainer:{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 35,
    },
    inputSearch: {
        height: 50,
        paddingHorizontal: 16,
        fontSize: 16,
        color: "#333",
    },
    content: {
        flex: 1,
        borderRadius: 16,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    addNoteButton: {
        width: "100%",
        height: 60, 
        backgroundColor: "#3A025B",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    textButton: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    }
})