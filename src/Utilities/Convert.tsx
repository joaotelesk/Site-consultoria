import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import Image from "next/image";

export function convertDatePost(date: Date | string) {
  const formatted = format(new Date(date), `'em' dd MMM 'de' yyyy`, {
    locale: ptBR,
  });

  const newFormatted = formatted
    .split(" ")
    .map((word, index) => (index === 2 ? word.toUpperCase() : word))
    .join(" ");

  return newFormatted;
}

export function convertStringUpcase(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function convertStringCharacters(text: string, num: number) {
  return text.substring(0, num);
}
export function convertImage({ name, attribs }: any) {
  if (name === "img") {
    return (
      <Image
        src={attribs.src}
        width={attribs.width}
        height={attribs.height}
        alt={attribs.alt || "Image não possui texto alternativo"}
      />
    );
  }
  return null;
}

export const convertDateCard = (date: Date | string) => {
  const formatted = format(new Date(date), `dd MMM yyyy`, {
    locale: ptBR,
  });

  const newFormatted = formatted
    .split(" ")
    .map((word, index) => (index === 1 ? word.toUpperCase() : word))
    .join(" ");

  return newFormatted;
};
