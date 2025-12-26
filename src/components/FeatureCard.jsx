const FeatureCard = ({ image, title }) => {
  return (
    <div className="elem">
      <img src={image} alt={title} />
      <h2>{title}</h2>
    </div>
  );
};

export default FeatureCard;
