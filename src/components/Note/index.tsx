import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
  description: string;
};
export function Note({title, description}: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description} numberOfLines={3} ellipsizeMode="tail">
        {description}
      </Text>
    </TouchableOpacity>
  );
}
