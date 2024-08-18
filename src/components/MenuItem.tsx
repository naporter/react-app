interface Props {
  title: string;
  description: string;
}

const MenuItem = ({ title, description }: Props) => {
  <div className="menu-item">
    <p className="title">{title}</p>
    <p className="description">{description}</p>
  </div>;
};

export default MenuItem;
