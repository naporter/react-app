interface Props {
  name: string;
  description: string;
}

const Language = ({ name, description }: Props) => {
  return (
    <div className="container-fluid" key={name}>
      {description}
    </div>
  );
};

export default Language;
