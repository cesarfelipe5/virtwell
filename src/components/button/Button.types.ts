import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  isLight?: boolean;
  iconName?: keyof typeof Ionicons.glyphMap;
  title: string;
}
