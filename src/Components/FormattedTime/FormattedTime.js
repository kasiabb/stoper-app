import styles from './FormattedTime.module.scss';

const FormattedTime = ({ time }) => {
  const hours = String(Math.floor(time / 3600000)).padStart(2, '0');
  const minutes = String(Math.floor((time % 3600000) / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, '0');
  const milliseconds = String(time % 1000).padStart(3, '0');

  return (
    <div className={styles.component}>
      <div className={styles.time}>
        {hours}:{minutes}:{seconds}.{milliseconds}
      </div>
    </div>
  );
};

export default FormattedTime;
