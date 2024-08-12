interface Props {
  name: string;
  description: string;
}

const Language = ({ name, description }: Props) => {
  return <p key={name}>{description}</p>;
};

export default Language;
