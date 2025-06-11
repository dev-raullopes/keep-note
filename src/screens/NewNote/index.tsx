import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ArrowLeft } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

export function NewNote() {
  const navigation = useNavigation();
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
      />
      <TextInput
        style={styles.content}
        placeholder="Digite sua anotação aqui..."
        placeholderTextColor="#999"
        multiline
        textAlignVertical="top" // Garante que o texto comece do topo
      />
      <TouchableOpacity style={styles.buttonSave}>
        <Text style={styles.textButton}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
