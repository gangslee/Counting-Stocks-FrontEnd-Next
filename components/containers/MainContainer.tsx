interface Props {
  children: React.ReactNode;
}

const MainContainer = ({ children }: Props) => {
  return <div className="m-auto max-w-5xl pt-28 font-s-core6">{children}</div>;
};

export default MainContainer;
