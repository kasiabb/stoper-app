import { useEffect, useState } from 'react';
import styles from './Timer.module.scss';
import FormattedTime from '../FormattedTime/FormattedTime';
const Timer = () => {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  const startTimer = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1);
      setIntervalId(id);
    }
  };
  const stopTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const resetTimer = () => {
    setTime(0);
  };

  return (
    <div className={styles.timer}>
      <FormattedTime time={time} />
      <div className={styles.buttons}>
        <button className={styles.button} onClick={startTimer}>
          Start
        </button>
        <button className={styles.button} onClick={stopTimer}>
          Stop
        </button>
        <button className={styles.button} onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
