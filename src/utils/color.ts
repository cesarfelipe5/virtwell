interface HexToRgbProps {
  hex: string;
  opacity?: number;
}

export const hexToRgb = ({ hex, opacity }: HexToRgbProps): string | null => {
  hex = hex.replace(/^#/, "");

  if (hex.length !== 3 && hex.length !== 6) {
    return null;
  }

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  if (!!opacity) {
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
  return `rgb(${r}, ${g}, ${b})`;
};
