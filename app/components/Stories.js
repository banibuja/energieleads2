"use client";

import { useEffect, useRef, useState } from 'react';
import styles from './ScrollingColumns.module.css';
import useGeolocation from '../hooks/useGeolocation';


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
  const country = useGeolocation();
  const [texts, setTexts] = useState({});

  const loadTranslations = async (langCode) => {
    try {
      const translations = await import(`../../public/translations/${langCode}.json`);
      setTexts(translations); 
    } catch (error) {
      console.error(`Could not load translations for ${langCode}:`, error);
    }
  };

  
  useEffect(() => {
    switch (country) {
      case "DE":
        loadTranslations('de');
        break;
      case "PT":
        loadTranslations('pt');
        break;
      case "FR":
        loadTranslations('fr');
        break;
      case "NL":
        loadTranslations('nl');
        break;
      case "IT":
        loadTranslations('it');
        break;
      default:
        loadTranslations('en'); 
    }
  }, [country]);

  useEffect(() => {
    const scroll1 = scrollRef1.current;
    const scroll2 = scrollRef2.current;
    const scroll3 = scrollRef3.current;

    const scroll = (element, direction) => {
      const scrollHeight = element.scrollHeight;
      const clientHeight = element.clientHeight;

      if (direction === 'up') {
        element.scrollTop += 1;
        if (element.scrollTop >= scrollHeight - clientHeight) {
          element.scrollTop = 0;
        }
      } else {
        element.scrollTop -= 1;
        if (element.scrollTop <= 0) {
          element.scrollTop = scrollHeight - clientHeight;
        }
      }
    };

    const interval1 = setInterval(() => scroll(scroll1, 'up'), 40);
    const interval2 = setInterval(() => scroll(scroll2, 'down'), 40);
    const interval3 = setInterval(() => scroll(scroll3, 'up'), 40);

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
                <p>{item.text}</p>
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
                <p>{item.text}</p>
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
                <p>{item.text}</p>
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
