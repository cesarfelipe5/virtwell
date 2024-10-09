declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}

// env.d.ts
declare module "@env" {
  export const GOOGLE_CLIENT_ID: string;
  export const GOOGLE_REDIRECT_URI: string;
  // Adicione aqui outras variáveis de ambiente que você precisa usar
}
