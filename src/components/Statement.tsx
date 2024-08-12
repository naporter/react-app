interface Props {
  children: string;
}

const Statement = ({ children }: Props) => {
  return <p className="item">{children}</p>;
};

export default Statement;
