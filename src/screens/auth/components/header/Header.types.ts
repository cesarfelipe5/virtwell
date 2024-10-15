interface HeaderBaseProps {
  isLogin?: boolean;
  title: string;
}

interface HeaderLoginProps extends HeaderBaseProps {
  isLogin: true;
  onPressBack?: never;
}

interface HeaderNonLoginProps extends HeaderBaseProps {
  isLogin?: false;
  onPressBack: () => void;
}

export type HeaderProps = HeaderLoginProps | HeaderNonLoginProps;
