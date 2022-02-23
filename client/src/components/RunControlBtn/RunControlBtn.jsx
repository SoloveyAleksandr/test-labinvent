import styles from './RunControlBtn.module.css';

function RunControlBtn({
  text,
  bgColor = '#2575aa',
  color = '#14741b'
}) {
  return (
    <button className={styles.runControlBtn}>
      <div
        className={styles.colorWrapper}
        style={{
          backgroundColor: bgColor
        }}>
        <span
          className={styles.color}
          style={{
            backgroundColor: color
          }}></span>
      </div>
      {text}
    </button>
  );
}

export default RunControlBtn;
