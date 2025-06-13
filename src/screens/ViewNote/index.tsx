import { View, TouchableOpacity, Text, TextInput, Alert } from "react-native";
import { styles } from "./styles";
import { ArrowLeft, Pencil, Save, Trash2 } from "lucide-react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import {
  notesStorage

} from "../../storage/noteStorage";
export function ViewNote() {
  const route = useRoute();
  const { id, title, description } = route.params as { id: string; title: string; description: string };
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setEditDescription] = useState(description)
  const navigation = useNavigation();

  // Funções para lidar com ações de edição e salvamento
  function handleEditNote() {
    setIsEditing(true);
  }
  async function handleSaveNote() {
    try {
      await notesStorage.update({
        id,
        title: editTitle,
        description: editDescription,
      });
      setIsEditing(false);
      Alert.alert("Nota atualizada com sucesso!");
      // navigation.goBack();
    } catch (error) {
      // Opcional: mostrar erro
      console.error("Erro ao salvar nota:", error);
    }
  }
  async function handleDeleteNote() {
    Alert.alert(
      "Excluir Nota",
      "Você tem certeza que deseja excluir esta nota?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => {
            // Chama a função de exclusão
            await notesStorage.remove(id);
            Alert.alert("Nota excluída com sucesso!");
            navigation.goBack();
          },
        },
      ]
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.goBack()}>
          <ArrowLeft size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleEditNote} disabled={isEditing}>
          <Pencil size={20} color={isEditing ? "#000" : "#ccc"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSaveNote} onPressIn={handleSaveNote} disabled={!isEditing}>
          <Save size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDeleteNote}>
          <Trash2 size={20} color={"#CD0000"} />
        </TouchableOpacity>
      </View>
      <Text style={styles.titleApp}>Sua Anotação</Text>
      <TextInput
        style={[styles.inputTitle, { color: "#000", fontWeight: '700' }]} // Define a cor do texto do título
        maxLength={30}
        value={editTitle}
        onChangeText={setEditTitle}
        editable={isEditing}
      />
      <TextInput
        style={styles.content}
        placeholderTextColor="#999"
        multiline
        textAlignVertical="top"
        value={editDescription}
        onChangeText={setEditDescription}
        editable={isEditing}
      />
    </View>
  );
}
