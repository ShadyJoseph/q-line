import styles from './Scroller.module.css';
import Item from './Item';
import { motion } from 'framer-motion';

const Scroller = () => {
  const images = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    src: `/images/img${i + 1}.png`,
    alt: `Image ${i + 1}`
  }));

  // Duplicate images for seamless loop
  const loopImages = [...images, ...images];

  return (
    <>
      <motion.h1
        className={styles.marg + ' ' + styles.headingSS}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Our Success Partners & <br /> Suppliers
      </motion.h1>
      {/* Left to Right */}
      <div className={styles.wrapper}>
        <div className={`${styles.scrollerTrack} ${styles.scrollRight}`}>
          {loopImages.map((img, index) => (
            <Item
              key={`right-${index}`}
              className={styles.item}
              src={img.src}
              alt={img.alt}
            />
          ))}
        </div>
      </div>

      {/* Right to Left */}
      <div className={styles.wrapper}>
        <div className={`${styles.scrollerTrack} ${styles.scrollLeft}`}>
          {loopImages.map((img, index) => (
            <Item
              key={`left-${index}`}
              className={styles.item}
              src={img.src}
              alt={img.alt}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Scroller;
