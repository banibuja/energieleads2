import { useState, useEffect } from 'react';

const fetchLocation = async () => {
  try {
    const token = process.env.NEXT_PUBLIC_IPINFO_TOKEN;
    const response = await fetch(`https://ipinfo.io/json?token=${token}`);
    const data = await response.json();
    return data.country;
  } catch (error) {
    console.error("Failed to fetch location", error);
    return null;
  }
};

export default function useGeolocation() {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      const location = await fetchLocation();
      setCountry(location);
    };

    getLocation();
  }, []);

  return country;
}
