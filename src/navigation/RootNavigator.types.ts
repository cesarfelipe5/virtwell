import { FC } from "react";

// Tipos para as rotas
export type AuthStackParamList = {
  AuthNavigator: undefined;
  Onboarding: undefined;
};

export type AppTabsParamList = {
  Home: undefined;
  Explore: undefined;
  Device: undefined;
  Settings: undefined;
};

export interface RenderTabIconProps {
  IconComponent: FC<any>;
  color: string;
  focused: boolean;
}
