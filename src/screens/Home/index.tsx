import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { Search, Plus, Trash2 } from "lucide-react-native";
import { Note } from "../../components/Note";
import { useNavigation } from "@react-navigation/native";
import { NoteStorage, notesStorage } from "../../storage/noteStorage";
import { useEffect, useState } from "react";

export function Home() {
  const [notes, setNotes] = useState<NoteStorage[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().trim().includes(searchQuery.toLowerCase().trim())
  );
  async function handleClearAll() {
    if (notes.length === 0) {
      Alert.alert("Atenção", "Não há notas para limpar.");
      return;
    }
    try {
      Alert.alert("Atenção", "Deseja realmente limpar todas as notas?", [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Limpar",
          onPress: async () => {
            await notesStorage.clearAll(); // Limpa todos os itens
            setNotes([]); // Atualiza o estado dos itens para vazio
            Alert.alert("Sucesso", "Todos as notas foram excluidas.");
          },
        },
      ]);
    } catch (error) {
      console.error("Erro ao limpar todos os itens:", error);
      Alert.alert("Erro", "Não foi possível excluir todas as notas.");
    }
  }
  useEffect(() => {
    async function loadNotes() {
      try {
        const storedNotes = await notesStorage.get();
        setNotes(storedNotes);
      } catch (error) {
        console.error("Erro ao carregar as notas:", error);
      }
    }
    const unsubscribe = navigation.addListener("focus", loadNotes);
    return unsubscribe;
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleApp}>Keep Note</Text>
        <TouchableOpacity style={{marginRight: 10}} onPress={handleClearAll}>
          <Trash2 size={24} color="#CD0000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("NewNote")}>
          <Plus size={30} color="#3A025B" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputSearchContainer}>
        <Search size={20} color="#666" />
        <TextInput
          placeholder="Buscar sua nota"
          placeholderTextColor={"#666"}
          style={styles.inputSearch}
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>
      <View style={styles.content}>
        <View style={{ flex: 1, paddingBottom: 30 }}>
          <FlatList
            numColumns={2} // Display items in two columns
            data={filteredNotes}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <Note title={item.title} description={item.description} />
            )}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{ justifyContent: "space-between" }} // Space items evenly in the row
            contentContainerStyle={{ padding: 5 }} // Add padding around the list
            ListEmptyComponent={() => (
              <View style={styles.emptyList}>
                <Text style={styles.emptyListText}>
                  Nenhuma anotação encontrada
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}
