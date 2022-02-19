interface Props {
  text: string;
}

const SectionTitle = ({ text }: Props) => {
  return <div className="flex items-center border-b-2 border-zinc-300 mb-4 pb-2 text-xl text-zinc-800 ">{text}</div>
}

export default SectionTitle