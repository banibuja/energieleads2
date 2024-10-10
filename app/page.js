// app/page.js
"use client";
import { useState, useEffect } from 'react';

const fetchLocation = async () => {
  try {
    const response = await fetch(`https://ipinfo.io/json?token=1a87347435ee33`);
    const data = await response.json();
    return data.country;
  } catch (error) {
    console.error("Failed to fetch location", error);
    return null;
  }
};

export default function Page() {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      const location = await fetchLocation();
      setCountry(location);
    };

    getLocation();
  }, []);

  return (
    <div>
      {/* <h1>Welcome to the Geolocation App</h1>
      {country ? (
        <div>
          {country === "DE" ? (
            <p>Willkommen aus Deutschland!</p>
          ) : country === "GB" ? (
            <p>Welcome from the United Kingdom!</p>
          ) : (
            <p>Welcome!</p>
          )}
        </div>
      ) : (
        <p>Loading location...</p>
      )} */}
    </div>
  );
}
