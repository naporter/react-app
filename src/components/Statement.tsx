interface Props {
  children: string;
}

const Statement = ({ children }: Props) => {
  return (
    <div className="container-fluid">
      <p>{children}</p>
    </div>
  );
};

export default Statement;
