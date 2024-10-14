import { Ionicons } from "@expo/vector-icons";
import { PressableProps } from "react-native";

export interface ButtonProps extends PressableProps {
  title: string;
  isLight?: boolean;
  iconRight?: boolean;
  iconName?: keyof typeof Ionicons.glyphMap;
}

export interface TitleProps {
  islight?: boolean;
}
