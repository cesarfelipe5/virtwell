interface MaskProps {
  value: string;
}

export const maskCNPJ = ({ value }: MaskProps): string => {
  value = value.replace(/\D/g, "");

  if (value.length <= 14) {
    value = value.replace(/^(\d{2})(\d)/, "$1.$2");
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
    value = value.replace(/(\d{4})(\d)/, "$1-$2");
  }

  return value;
};

export const maskCPF = ({ value }: MaskProps): string => {
  value = value.replace(/\D/g, "");

  if (value.length <= 11) {
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }

  return value;
};

export const maskPhone = ({ value }: MaskProps): string => {
  value = value.replace(/\D/g, "");

  if (value.length <= 11) {
    value = value.replace(/^(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d{1})(\d{4})(\d{4})$/, "$1 $2-$3");
  }

  return value;
};

export const maskCEP = ({ value }: MaskProps): string => {
  value = value.replace(/\D/g, "");

  if (value.length <= 8) {
    value = value.replace(/^(\d{5})(\d)/, "$1-$2");
  }

  return value;
};
