import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { Search, CirclePlus } from "lucide-react-native";
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
    title: "Meeting notes",
    description:
      "Meeting notes are written records of the discussions and decisions made during a meeting.",
  },
  {
    id: 4,
    title: "Shopping list",
    description:
      "A shopping list is a written record of items you need to buy at the store.",
  },
  {
    id: 5,
    title: "To-do list",
    description:
      "A to-do list is a simple way to keep track of tasks you need to complete.",
  },
  {
    id: 6,
    title: "Grocery list",
    description:
      "A grocery list is a list of food items you need to buy at the grocery store.",
  },
  {
    id: 7,
    title: "Reminder note",
    description:
      "A reminder note is a short message to help you remember something important.",
  },
  {
    id: 8,
    title: "Birthday note",
    description:
      "A birthday note is a special message to celebrate someone’s birthday.",
  },
  {
    id: 9,
    title: "Thank you note",
    description:
      "A thank you note is a short letter expressing gratitude to someone for a gift, service, or kindness.",
  },
  {
    id: 10,
    title: "Meeting notes",
    description:
      "Meeting notes are written records of the discussions and decisions made during a meeting.",
  },
  {
    id: 11,
    title: "Shopping list",
    description:
      "A shopping list is a written record of items you need to buy at the store.",
  },
  {
    id: 12,
    title: "To-do list",
    description:
      "A to-do list is a simple way to keep track of tasks you need to complete.",
  },
  {
    id: 13,
    title: "Grocery list",
    description:
      "A grocery list is a list of food items you need to buy at the grocery store.",
  },
  {
    id: 14,
    title: "Reminder note",
    description:
      "A reminder note is a short message to help you remember something important.",
  },
  {
    id: 15,
    title: "Birthday note",
    description:
      "A birthday note is a special message to celebrate someone’s birthday.",
  },
];
export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleApp}>Keep Note</Text>
      <View style={styles.inputSearchContainer}>
        <Search size={20} color="#666" />
        <TextInput
          placeholder="Buscar sua nota"
          placeholderTextColor={"#666"}
          style={styles.inputSearch}
        />
      </View>
      <View style={styles.content}>
        <View style={{ flex: 1 }}>
        <FlatList
          numColumns={2}
          data={notes}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Note title={item.title} description={item.description} />
          )}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{ justifyContent: "space-between" }}
        />
        </View>
      </View>
      <TouchableOpacity style={styles.addNoteButton}>
        <Text style={styles.textButton}>Nova Anotação</Text>
      </TouchableOpacity>
    </View>
  );
}
