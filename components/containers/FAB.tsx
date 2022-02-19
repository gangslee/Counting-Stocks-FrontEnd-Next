interface Props {
  text: string;
  onClick: () => void;
}

const FAB = ({ text, onClick }: Props) => {
  return <div className="
  flex justify-center items-center w-14 h-14 fixed bottom-8 right-8 ring-1 ring-zinc-100
  bg-white rounded-full shadow-2xl text-2xl cursor-pointer hover:-translate-y-2 transition-all duration-300
  " onClick={onClick}>{text}</div >;
};

export default FAB;
