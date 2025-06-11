import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { ArrowLeft } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { NoteStorage, notesStorage } from "../../storage/noteStorage";
import { useState } from "react";

export function NewNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigation = useNavigation();

  async function handleSave() {
    if (!title.trim() || !description.trim()) {
      alert("Por favor, preencha o título e a descrição da anotação.");
      return;
    }
    const newNote: NoteStorage = {
      id: String(Date.now()), // Gera um ID único baseado no timestamp
      title: title.trim(),
      description: description.trim(),
    };
    try {
      await notesStorage.add(newNote);
      Alert.alert("Informação", "Anotação salva com sucesso!", [
        {
          text: "OK",
          onPress: () => navigation.goBack(), // Volta para a tela anterior após salvar
        },
      ]);
    } catch (error) {
      console.error("Erro ao salvar a anotação:", error);
      alert("Erro ao salvar a anotação. Tente novamente.");
    }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ marginBottom: 10 }}
        onPress={() => navigation.goBack()}
      >
        <ArrowLeft size={30} color="#000" />
      </TouchableOpacity>
      <Text style={styles.titleApp}>Nova Anotação</Text>
      <TextInput
        placeholder="Título da anotação"
        style={styles.inputTitle}
        maxLength={30} // Limita o título a 30 caracteres
        onChangeText={setTitle}
        value={title}
      />
      <TextInput
        style={styles.content}
        placeholder="Digite sua anotação aqui..."
        placeholderTextColor="#999"
        multiline
        textAlignVertical="top" // Garante que o texto comece do topo
        onChangeText={setDescription}
        value={description}
      />
      <TouchableOpacity style={styles.buttonSave} onPress={handleSave}>
        <Text style={styles.textButton}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
