// components/Item.js
const Item = ({ className, src, alt }) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Item;
