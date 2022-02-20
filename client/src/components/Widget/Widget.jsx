import styles from './Widget.module.css';

function Widget({
  title,
  widgetColor,
  children
}) {
  return (
    <div className={styles.widget}>
      <div className={styles.widgetName}>
        <span
          className={styles.widgetColor}
          style={{ backgroundColor: widgetColor }}></span>
        <h3 className={styles.widgetTitle}>{title}</h3>
      </div>
      <div className={styles.widgetBody}>
        {children}
      </div>
    </div>
  );
}

export default Widget;
