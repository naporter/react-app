interface Props {
  intro: JSX.Element;
  body: string;
}

const Statement = ({ intro, body }: Props) => {
  return (
    <div className="container">
      <div className="container-item statement">
        <p className="typed">
          {intro}
          {body}
        </p>
      </div>
      <p className="container-item pulse scroll">SCROLL</p>
    </div>
  );
};

export default Statement;
