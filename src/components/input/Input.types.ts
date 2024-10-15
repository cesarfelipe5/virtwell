import { TextInputProps, ViewStyle } from "react-native";

export interface InputProps extends TextInputProps {
  label: string;
  rightLabel?: string;
  onPressRightLabel?: () => void;
  containerStyle?: ViewStyle;
  required?: boolean;
  mask?: ({ value }) => string;
}
