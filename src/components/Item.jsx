// components/Item.js
import Image from 'next/image';
const Item = ({ className, src, alt }) => {
  return (
    <div className={className}>
      <Image src={src} alt={alt} width={150} height={100} priority loading="eager" />
    </div>
  );
};

export default Item;
