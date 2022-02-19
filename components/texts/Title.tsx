interface Props {
  children: React.ReactNode;
}

const Title = ({ children }: Props) => {
  return <span className="block text-center my-4 font-lato text-3xl font-semibold text-zinc-800 ">{children}</span>;
}

export default Title
