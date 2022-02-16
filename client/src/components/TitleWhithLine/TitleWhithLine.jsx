import styles from './TitleWhithLine.module.css';

function TitleWhithLine({ title }) {
  return (
    <div className={styles.titleWhithLine}>
      <span className={styles.line}></span>
      <span className={styles.title}>
        {title}
      </span>
    </div>
  );
}

export default TitleWhithLine;
