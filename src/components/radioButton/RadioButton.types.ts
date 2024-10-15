import { ViewStyle } from "react-native";

export interface RadioButtonProps {
  label?: string;
  options: string[];
  containerStyle?: ViewStyle;
  onSelect: (value: any) => void;
}
