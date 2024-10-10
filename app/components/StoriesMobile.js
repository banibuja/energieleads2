"use client";

import { useEffect, useRef } from 'react';
import styles from './ScrollingMobileColumns.module.css';

const ScrollingColumns = () => {
  const data = [
    { name: "Maurice", company: "Glanzheim GmbH", text: "Mit Energieleads konnten wir eine neue Webseite erstellen, Funnels bauen und haben sogar mehrere hunderte Leads abgenommen! Hoher 6-Stelliger Umsatz wurde erzielt. Danke!", stars: 5 },
    { name: "Thomas", company: "Solarflink AG", text: "Energieleads sind die Ersten, die Ihr Versprechen gehalten haben!", stars: 5 },
    { name: "Jan", company: "Company AG", text: "Umsatz bis jetzt mit euren Leads: 253'933 CHF", stars: 5 },
  ];

  const scrollingData = [...Array(20)].flatMap(() => data);
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);

  useEffect(() => {
    const scrollHorizontally = (element, direction) => {
      const scrollWidth = element.scrollWidth;
      const clientWidth = element.clientWidth;
    
      if (direction === 'right') {
        element.scrollLeft += 1; // Move right
        if (element.scrollLeft >= scrollWidth - clientWidth) {
          element.scrollLeft = 0; // Reset to the start
        }
      } else {
        element.scrollLeft -= 1; // Move left
        if (element.scrollLeft <= 0) {
          element.scrollLeft = scrollWidth - clientWidth; // Jump to the end
        }
      }
    };
  
    const interval1 = setInterval(() => scrollHorizontally(scrollRef1.current, 'right'), 40);
    const interval2 = setInterval(() => scrollHorizontally(scrollRef2.current, 'left'), 40);
    const interval3 = setInterval(() => scrollHorizontally(scrollRef3.current, 'right'), 40);
  
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.column} ref={scrollRef1}>
        <ul className={styles.scroll}>
          {scrollingData.map((item, index) => (
            <li key={index} className={styles.listItem}>
              <div className={`${styles.card} ${index === 0 || index === 2 || index === 5 ? styles.highlight : ''}`}>
                <div className={styles.stars}>
                  {'★'.repeat(item.stars)}
                </div>
                <div className={styles.text}>{item.text}</div>
                <div className={styles.footer}>
                  <img src="images/dE3vFmttnZThKVlBoiqxv2kBw.avif" alt="Logo" className={styles.logo} />
                  <div className={styles.nameContainer}>
                    <span>{item.name}</span>
                    <small id='comp'>{item.company}</small>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
  
      <div className={styles.column} ref={scrollRef2}>
        <ul className={styles.scroll}>
          {scrollingData.map((item, index) => (
            <li key={index} className={styles.listItem}>
              <div className={`${styles.card} ${index === 0 || index === 2 || index === 5 ? styles.highlight : ''}`}>
                <div className={styles.stars}>
                  {'★'.repeat(item.stars)}
                </div>
                <div className={styles.text}>{item.text}</div>
                <div className={styles.footer}>
                  <img src="images/dE3vFmttnZThKVlBoiqxv2kBw.avif" alt="Logo" className={styles.logo} />
                  <div className={styles.nameContainer}>
                    <span>{item.name}</span>
                    <small>{item.company}</small>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
  
      <div className={styles.column} ref={scrollRef3}>
        <ul className={styles.scroll}>
          {scrollingData.map((item, index) => (
            <li key={index} className={styles.listItem}>
              <div className={`${styles.card} ${index === 0 || index === 2 || index === 5 ? styles.highlight : ''}`}>
                <div className={styles.stars}>
                  {'★'.repeat(item.stars)}
                </div>
                <div className={styles.text}>{item.text}</div>
                <div className={styles.footer}>
                  <img src="images/dE3vFmttnZThKVlBoiqxv2kBw.avif" alt="Logo" className={styles.logo} />
                  <div className={styles.nameContainer}>
                    <span>{item.name}</span>
                    <small>{item.company}</small>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ScrollingColumns;
