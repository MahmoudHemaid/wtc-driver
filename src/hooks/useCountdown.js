import {useState, useEffect} from 'react';

export default function useCountdown(time) {
  const [countdown, setCountdown] = useState(time);

  useEffect(() => {
    if (!countdown) return;
    const intervalId = setInterval(() => {
      setCountdown(countdown - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdown]);

  const reset = () => setCountdown(time);

  return [countdown, reset, setCountdown];
}
