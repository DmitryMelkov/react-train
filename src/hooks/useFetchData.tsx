import { useState, useEffect, useCallback } from 'react';

const useFetchData = (url: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>(null); 

  const fetchData = useCallback(async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();

    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, [fetchData]);

  return { loading, data };
};

export default useFetchData;
