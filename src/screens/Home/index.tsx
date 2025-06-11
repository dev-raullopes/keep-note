import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { Search, Plus } from "lucide-react-native";
import { Note } from "../../components/Note";

const notes = [
  {
    id: 1,
    title: "How to write thanks you note",
    description:
      "A thank you note is a short letter expressing gratitude to someone for a gift, service, or kindness.",
  },
  {
    id: 2,
    title: "How to write a note",
    description:
      "Writing a note can be a simple yet effective way to communicate your thoughts or feelings.",
  },
  {
    id: 3,
    title: "How to write a note",
    description:
      "Writing a note can be a simple yet effective way to communicate your thoughts or feelings.",
  },
  {
    id: 4,
    title: "How to write a note",
    description:
      "Writing a note can be a simple yet effective way to communicate your thoughts or feelings.",
  },
  {
    id: 5,
    title: "How to write a note",
    description:
      "Writing a note can be a simple yet effective way to communicate your thoughts or feelings.",
  },
  {
    id: 6,
    title: "How to write a note",
    description:
      "Writing a note can be a simple yet effective way to communicate your thoughts or feelings.",
  },
  {
    id: 7,
    title: "How to write a note",
    description:
      "Writing a note can be a simple yet effective way to communicate your thoughts or feelings.",
  },
  {
    id: 8,
    title: "How to write a note",
    description:
      "Writing a note can be a simple yet effective way to communicate your thoughts or feelings.",
  },
  {
    id: 9,
    title: "How to write a note",
    description:
      "Writing a note can be a simple yet effective way to communicate your thoughts or feelings.",
  },
];
export function Home() {
  function handleAddNote() {
    console.log("Add new note");
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.titleApp}>Keep Note</Text>
      <TouchableOpacity onPress={handleAddNote}>
        <Plus size={30} color="#3A025B" />
      </TouchableOpacity>
      </View>
      <View style={styles.inputSearchContainer}>
        <Search size={20} color="#666" />
        <TextInput
          placeholder="Buscar sua nota"
          placeholderTextColor={"#666"}
          style={styles.inputSearch}
        />
      </View>
      <View style={styles.content}>
        <View style={{ flex: 1, paddingBottom: 30, }}>
        <FlatList
          numColumns={2} // Display items in two columns
          data={notes}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Note title={item.title} description={item.description} />
          )}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{ justifyContent: "space-between" }} // Space items evenly in the row
          contentContainerStyle={{ padding: 5 }} // Add padding around the list
        />
        </View>
      </View>
    </View>
  );
}
