interface Props {
  text: string;
}

const Subtitle = ({ text }: Props) => {
  return <span className="block mb-7 text-center font-s-core4 text-xl font-semibold text-zinc-800 ">{text}</span>;
}

export default Subtitle;
