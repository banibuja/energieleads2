"use client";
import styles1 from './ScrollingProviders.module.css';
const ScrollingProviders = () => {
  const providers = [
    "images/download.svg",
    "images/download1.svg",
    "images/download2.svg",
  ];
  const scrollingImages = [...Array(2)].flatMap(() => providers); 
  return (
    <div className={styles1.container}>
      <div className={styles1.scrollingContainer}>
        <ul className={styles1.scroll}>
          {scrollingImages.map((src, index) => (
            <li key={index} className={styles1.listItem}>
              <img src={src} alt={`Provider ${index + 1}`} className={styles1.image} />
            </li>
          ))}
          {scrollingImages.map((src, index) => (
            <li key={`clone-${index}`} className={styles1.listItem}>
              <img src={src} alt={`Provider ${index + 1}`} className={styles1.image} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ScrollingProviders;