import styles from './FormattedTime.module.scss';

const FormattedTime = ({ time }) => {
  const formatTime = (milliseconds) => {
    const hours = Math.floor(milliseconds / 3600000);
    const minutes = Math.floor((milliseconds % 3600000) / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const millisecondsPart = milliseconds % 1000;

    const padZero = (value) => (value < 10 ? `0${value}` : value);

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )}.${millisecondsPart}`;
  };

  return (
    <div className={styles.component}>
      <div className={styles.time}>{formatTime(time)}</div>
    </div>
  );
};
export default FormattedTime;
