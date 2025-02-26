import { useEffect, useState } from "react";

const useNowDate = () => {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);

    return () => {
      clearInterval(interval);
      console.log('cleaning...');
    };
  }, []);

  return now
};

export default useNowDate;
