import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  description: string;
};
export function Note({title, description, ...rest}: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description} numberOfLines={3} ellipsizeMode="tail">
        {description}
      </Text>
    </TouchableOpacity>
  );
}
