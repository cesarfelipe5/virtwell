import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isLight?: boolean;
  iconRight?: boolean;
  iconName?: keyof typeof Ionicons.glyphMap;
}

export interface TitleProps {
  islight?: boolean;
}
