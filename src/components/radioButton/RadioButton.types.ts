import { ViewStyle } from "react-native";

export interface RadioButtonOption {
  value: string;
  description?: string;
}

export interface RadioButtonProps {
  label?: string;
  options: RadioButtonOption[];
  containerStyle?: ViewStyle;
  onSelect: (value: any) => void;
  value?: string;
}
