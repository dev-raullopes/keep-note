import { View, TouchableOpacity, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { ArrowLeft, Pencil, Save } from "lucide-react-native";

export function ViewNote() {
  function handleGoBack() {
    console.log("Voltar");
  }
  function handleEditNote() {
    console.log("Editar anotação");
  }
  function handleSaveNote() {
    console.log("Salvar anotação");
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={{ flex: 1 }} onPress={handleGoBack}>
          <ArrowLeft size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleEditNote}>
          <Pencil size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSaveNote}>
          <Save size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <Text style={styles.titleApp}>Sua Anotação</Text>
      <TextInput
        style={styles.inputTitle}
        maxLength={30} // Limita o título a 30 caracteres
        //onChangeText={setTitle}
        //value={title}
      />
      <TextInput
        style={styles.content}
        placeholderTextColor="#999"
        multiline
        textAlignVertical="top" // Garante que o texto comece do topo
        //onChangeText={setDescription}
        //value={description}
      />
    </View>
  );
}
