import styles from './InfoBox.module.css';

function InfoBox({
  title,
  children
}) {
  return (
    <div className={styles.infoBox}>
      <div className={styles.infoBoxTitle}>
        <span>{title}</span>
      </div>
      <div className={styles.infoBoxBody}>
        {children}
      </div>
    </div>
  );
}

export default InfoBox;
