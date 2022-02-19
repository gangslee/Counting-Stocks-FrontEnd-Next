interface Props {
  children: React.ReactNode;
  isPlus: boolean;
}

export const PlusMinus = ({ children, isPlus }: Props) => {
  return <span className={isPlus ? "text-CS_RED" : "text-CS_BLUE"}>{children}</span>;
}
