import styles from './Widget.module.css';

function Widget({
  title,
  widgetColor,
  image
}) {
  return (
    <div className={styles.widget}>
      <div className={styles.widgetName}>
        <span
          className={styles.widgetColor}
          style={{ backgroundColor: widgetColor }}></span>
        <h3 className={styles.widgetTitle}>{title}</h3>
      </div>
      <div className={styles.widgetImg}>
        {image}
      </div>
    </div>
  );
}

export default Widget;
