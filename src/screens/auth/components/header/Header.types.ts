interface HeaderBaseProps {
  isLogin: boolean;
  title: string;
}

interface HeaderLoginProps extends HeaderBaseProps {
  isLogin: true;
  onPressBack?: never; // Não é necessário se isLogin for true
}

interface HeaderNonLoginProps extends HeaderBaseProps {
  isLogin: false;
  onPressBack: () => void; // Obrigatório se isLogin for false
}

// Tipo que une as duas possibilidades
export type HeaderProps = HeaderLoginProps | HeaderNonLoginProps;
