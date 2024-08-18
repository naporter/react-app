interface Props {
  key: string;
  name: string;
  description: string;
  index: number;
}

const Language = ({ name, description, index }: Props) => {
  return (
    <div className={index % 2 == 0 ? "grid-item-left" : "grid-item-right"}>
      <h2 className="grid-item-title">{name}</h2>
      <p className="grid-item-desc">{description}</p>
    </div>
  );
};

export default Language;
